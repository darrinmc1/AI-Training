<?php
get_header('2');
/* Template Name: Project Detail */
?>

<!--Project Detail Alanı--> 
<section class="hizmetler-detay-sayfasi-alani">
<?php $projectdetailleft = get_field('project_detail_left');?>
    <div class="tablohizmetlerdetay">
        <!--Project Detail Görsel Alanı--> 
        <div class="tablo--1-ve-2 wow <?php echo $projectdetailleft ['effect'];?>" data-wow-delay="<?php echo $projectdetailleft ['duration'];?>s">
                <img src="<?php echo $projectdetailleft ['image'];?>" alt="Project Detail" class="prodetal">
        </div>    
        <!--Hizmetler Detay Yazı Alanı-->   
        <div class="tablo--1-ve-2">
            <?php if( have_rows('project_detail_right') ): ?>

            <?php while( have_rows('project_detail_right') ): the_row();

            //vars
            $icon = get_sub_field('icon');
            $title = get_sub_field('title');
            $text = get_sub_field('text');
            $effect = get_sub_field('effect');
            $duration = get_sub_field('duration');

            ?>   
            <div class="services-kutu1 wow <?php echo $effect; ?>" data-wow-delay="<?php echo $duration; ?>s" style="cursor:pointer;">
                <div class="icon-project-detail"><i class="<?php echo $icon; ?>"></i></div>
                <h3 class="baslik-2 h-yazi-margin-kucuk"><?php echo $title; ?></h3>
                <p class="services-kutu1--yazi-p">
                <?php echo $text; ?>
                </p>
            </div>
            <?php endwhile; ?>
        <?php endif; ?>
        </div>
    </div> 
</section>

<?php get_footer(); ?>