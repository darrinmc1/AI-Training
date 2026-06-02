<?php
get_header(3);
?>

<main>
<!--Recent Posts 1-->
<section class="news-alani-sayfa">
    <div class="container">
        <div class="row">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <div class="col-lg-12">
                <p class="post-kutu--yazi">
                    <?php the_content(); ?>
                </p>
                <div class="h-yazi-ortalama h-yazi-margin-50">
                <div class="bosluk3"></div>
                </div>

            </div>
        <?php 
        endwhile;
        else :
            _e( 'Sorry, no posts matched your criteria.', 'textdomain' );
        endif;
        ?>
        </div>
    </div>
</section> 


<?php get_footer();?>