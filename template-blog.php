<?php get_header('2'); 
/* Template Name: Blog */
?>

<main>
<section class="news-alani-sayfa">
<div class="container">
<div class="row">
<?php 
foreach( get_field('blog_section') as $post ):
setup_postdata( $post );
?>
<div class="col-lg-4">
<div class="post-kutu" onclick="location.href='<?php the_permalink(''); ?>';" style="cursor:pointer;">
<?php the_post_thumbnail('custom-size'); ?>
<div class="bosluk333"></div>
<div class="ozld">
<h3 class="baslik-3 h-yazi-margin-kucuk"><?php the_title(''); ?></h3>
<div class="datesection">
    <span class="date">
    <?php echo date('F j, Y'); ?>
    </span></div>
    <?php the_excerpt(); ?>
</div>
</div>
<div class="bosluk2dte"></div>
<div class="or">
    <a class="btn-2" href="<?php the_permalink(''); ?>"><p class="btnn2">Read more</p></a>
</div>
</div>

<?php wp_reset_postdata();
endforeach;
?>
</div>
</div>

</section> 

<?php get_footer();?>