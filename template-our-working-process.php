<?php
get_header('2');
/* Template Name: Our Working Process */
?>

<!--Our Working Process-->
<?php $processsection = get_field('process_section'); ?>
<section class="processs">
    <div class="hero666">
        <img class="imagerotate99" src="<?php echo $processsection ['arrow_image'];?>" alt="">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="h-yazi-ortalama h-yazi-margin-orta-3">
                    <h2 class="h2-baslik-hizmetler-2 wow <?php echo $processsection ['title_effect'];?>" data-wow-delay="0.4s"> <?php echo $processsection ['title'];?> </h2>
                </div>
                    <p class="h2-baslik-hizmetler-2__paragraf wow <?php echo $processsection ['small_text_effect'];?>" data-wow-delay="0.5s">
                    <?php echo $processsection ['small_text'];?>
                    </p>
            </div>
        </div>
    </div>
    <div class="bosluke5"></div>
    <div class="container">
        <div class="row">
            <?php if( have_rows('processsection_circle') ): ?>
            <?php while( have_rows('processsection_circle') ): the_row();
            //vars
            $icon = get_sub_field('icon');
            $title = get_sub_field('title');
            $text = get_sub_field('text');
            $effect = get_sub_field('effect');
            $duration = get_sub_field('duration');
            $cssadvanced = get_sub_field('css_advanced');
            ?>
            <div class="col-lg-3">
                <div class="deps2 wow <?php echo $effect; ?>" data-wow-delay="<?php echo $duration; ?>s">
                    <div class="hizmet-kutu">
                        <div class="kutu-duzen">
                            <div class="bosluk333"></div>
                            <div class="icon-box">
                                <span class="border-layer <?php echo $cssadvanced; ?>"></span>
                                <i class="<?php echo $icon; ?> <?php echo $cssadvanced; ?>"></i>
                            </div>
                            <h3><?php echo $title; ?></h3>
                            <p><?php echo $text; ?></p>
                        </div>
                    </div>
                </div>
            </div>
            <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </div>
</section>

<?php get_footer();?>