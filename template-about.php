<?php
get_header('2');
/* Template Name: About */
?>

<!--About Info Alanı-->
<?php $aboutus_3D = get_field('3d_about_us');?>
<section class="hakkimizda-bolumu-anasayfa22">
<div class="h-yazi-ozel h-yazi-margin-ozel">           
</div>
<div class="container">
    <div class="row">
    <div class="col-lg-6 bb">
        <img class="spes wow <?php echo $aboutus_3D ['image_effect_1'];?>" data-wow-delay="0.5s" src="<?php echo $aboutus_3D ['image_1'];?>" alt="" >
    </div>         
    <!--Galeri Görsel Alanı-->
    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
        <h2 class="h2-baslik-anasayfa-ozel btw wow <?php echo $aboutus_3D ['right_text_about_effect'];?>" data-wow-delay="0.4s"> <?php echo $aboutus_3D ['right_title_about'];?> </h2>
        <div class="bosluk333"></div>
    <p class="paragraf wow <?php echo $aboutus_3D ['right_text_about_effect'];?>" data-wow-delay="0.5s">
    <?php echo $aboutus_3D ['right_text_about'];?>
        <div class="container">
            <div class="row justify-content-center">
            <?php if( have_rows('countdown') ): ?>

                <?php while( have_rows('countdown') ): the_row();

                //vars
                $icon = get_sub_field('icon');
                $number = get_sub_field('number');
                $title = get_sub_field('title');
                $effect = get_sub_field('effect');
                $duration = get_sub_field('duration');

            ?>
            <div class="col-lg-3 wow <?php echo $effect; ?>" data-wow-delay="<?php echo $duration; ?>s">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12 counbig">
                    <span class="counttext"><?php echo $number; ?></span>
                    <h6 class="hize"><?php echo $title; ?></h6>
                    </div>
                    </div>
                </div>
            </div> 
            <?php endwhile; ?>   
                </div>
            <?php endif; ?> 
        </div>
    </div>
    </div>
</div>
</section>
<div class="bosluk4"></div>


<!-- Offer Request -->
<section class="offer-request">
<div class="container">
    <div class="row">
    <div class="dep2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <?php $offerrequest = get_field('offer_request');?>
                    <h2 class="h2-baslik-hizmetler-2 wow fade"><?php echo $offerrequest['form_title']; ?></h2>
                    <?php echo $offerrequest['offer_form']; ?>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
</section>

<!-- What Do We Offer? -->
<section class="why-us">
<?php $ridinglevelsec = get_field('riding_level_section');?>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="h-yazi-ortalama h-yazi-margin-orta-3">
                    <h2 class="h2-baslik-hizmetler-2 wow <?php echo $ridinglevelsec ['title_effect'];?>" data-wow-delay="0.4s"> <?php echo $ridinglevelsec ['title'];?> </h2>
                </div>
                    <p class="h2-baslik-hizmetler-2__paragraf wow <?php echo $ridinglevelsec ['small_text_effect'];?>" data-wow-delay="0.5s">
                    <?php echo $ridinglevelsec ['small_text'];?>
                    </p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
        <?php if( have_rows('riding_level') ): ?>
        <?php while( have_rows('riding_level') ): the_row();
        //vars
        $image = get_sub_field('image');
        $icon = get_sub_field('icon');
        $title = get_sub_field('title');
        $text = get_sub_field('text');
        $effect = get_sub_field('effect');
        $duration = get_sub_field('duration');
        $link = get_sub_field('link');
        $date = get_sub_field('date');
        $buttontext = get_sub_field('button_text');
        $css = get_sub_field('css');
        ?>
        <div class="col-lg-3 ds wow <?php echo $effect; ?>" data-wow-delay="<?php echo $duration; ?>s">
        <div class="dep">
            <div class="or56">
                <div class="iconwr or56"><p class="dzv"><i class="<?php echo $icon; ?>"></i></p></div>
                        <div class="bosluk333"></div>
                        <h3 class="prongl"><?php echo $title; ?></h3>
                        <h4 class="infostextgl"><?php echo $date; ?></h4>
                </div>
            </div>
        </div>
        <?php endwhile; ?>
        <?php endif; ?>
        </div>
    </div>
</section>

<?php get_footer();?>