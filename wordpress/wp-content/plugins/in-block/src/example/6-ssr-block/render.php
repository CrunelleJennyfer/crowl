<?php

function ssr_block_render($attrs) {
  $context = array(
    'title' => $attrs['title'],
    'subtitle' => $attrs['subtitle']
  );

  $testimonies = new Timber\PostQuery(array(
     'post_type' => 'testimony'
  ));

  $context['testimonies'] = $testimonies;

  return Timber::compile('render.twig', $context);
}
