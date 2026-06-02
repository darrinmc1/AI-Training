<?php
get_header(3);
?>

<section class="news-alani-sayfa">
    <div class="container">
        <div class="row">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <div class="col-lg-4">
                <div class="post-kutu" style="cursor:pointer;">
                    <img src="<?php the_post_thumbnail_url(''); ?>" alt="Haber 1" class="haber-gorsel">
                    <div class="datesection">
                        <span class="date">
                            <?php echo get_the_date('d');?>.<?php echo get_the_date('m');?>.<?php echo get_the_date('Y');?>
                        </span>&nbsp;<span class="tt">-</span>&nbsp;<?php the_category(); ?></div>
                    <h3 class="baslik-3 h-yazi-margin-kucuk"><?php the_title(''); ?></h3>
                    <p class="post-kutu--yazi">
                        <?php the_excerpt(); ?>
                    </p>
                    <div class="h-yazi-ortalama h-yazi-margin-50">
                    <div class="bosluksv"></div>
                    <a href="<?php the_permalink(''); ?>" class="custom-button">More</a>
                    </div>
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