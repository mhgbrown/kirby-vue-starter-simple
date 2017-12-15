<?php

use Lar\JsonApi\StaticField;
use Lar\JsonApi\PageField;
use Lar\JsonApi\JsonListCollection;
use Lar\JsonApi\JsonFieldCollection;

// Quick and dirty "rewerite" of JsonApiUtil to add some
// fields to pages and support some extra fields on files
// TODO Do I even need to have the JSON API plugin?
class HomeJsonApiUtil
{
	public static function pageToJson($page)
	{
		if (empty($page)) {
			return null;
		}

		// Actually a pages collection or other list of pages
		if ($page instanceof Traversable)
		{
			return new JsonListCollection(array_map(['static', 'pageToJson'], array_values(iterator_to_array($page))));
		}

		$content = $page->content();
		$collection = new JsonFieldCollection();

		$collection->addFields([
			'id' => new StaticField($page->id()),
			'url' => new StaticField($page->url()),
			'uid' => new StaticField($page->uid()),
            'type' => new StaticField($page->intendedTemplate()),
		]);

        $contains = c::get('jsonapi.html.parser', false);
        foreach ($content->fields() as $field) {

            // Transform markdown value to html
            // Check if key contains string
            // default is 'textarea'
            if( strpos( $field, $contains ) !== false ) {
                $value = $content->get($field)->kt();
                $collection->addField($field, new PageField($value));
            }
            else {
                $collection->addField($field, new PageField($content->get($field)));
            }
        }

		return $collection;
	}

	public static function structureToJson($structure)
	{
		if (empty($structure)) {
			return null;
		}

		$keys = $structure->keys();

		if ($keys === range(0, count($keys) - 1)) {
			return new JsonListCollection(array_map(['static', 'structureToJson'], array_values(iterator_to_array($structure))));
		}

		$collection = new JsonFieldCollection();
        $contains = c::get('jsonapi.html.parser', false);

        foreach ($structure as $key => $value) {


            // Transform markdown value to html
            // Check if key contains string
            // default is 'textarea'
            if( strpos( $key, $contains ) !== false ) {
                $value = $value->kt();
                $collection->addField($key, new PageField($value));
            }
            else {
                $collection->addField($key, new PageField($value));
            }
        }

		return $collection;
	}

	public static function filesToJson($page)
	{
		if (empty($page)) {
			return null;
		}

		$files = [];

		foreach ($page->files()->sortBy('sort', 'asc') as $file) {
			$collection = new JsonFieldCollection();
			$collection->addFields([
                // existing
				'url' => new StaticField($file->url()),
				'name' => new StaticField($file->name()),
				'extension' => new StaticField($file->extension()),
				'size' => new StaticField($file->size()),
				'niceSize' => new StaticField($file->niceSize()),
				'mime' => new StaticField($file->mime()),
				'type' => new StaticField($file->type()),

                // new static
                'ratio' => new StaticField($file->ratio()),

                // new page
                'caption' => new PageField($file->caption()->kt())
			]);

			$files[] = $collection;
		}

		return new JsonListCollection($files);
	}

	// FIXME passing in true here was not working! (PHP noob?)
	public static function pageToNode($page, $fullTree = true)
	{
		if (empty($page)) {
			return null;
		}

		if ($page instanceof Traversable)
		{
			return new JsonListCollection(array_map(['static', 'pageToNode'], array_values(iterator_to_array($page))));
		}

		$node = static::pageToJson($page);
		$node->addField('files', new StaticField(static::filesToJson($page)));

		if ($fullTree)
		{
			$node->addField('children', new StaticField(static::pageToNode($page->children())));
		}
		else
		{
			$node->addField('children', new StaticField(array_keys(iterator_to_array($page->children()))));
		}

		return $node;
	}
}


return function($site, $pages, $page) {
    return [
        'pages' => HomeJsonApiUtil::pageToNode($site->children())->toArray()
    ];
};
