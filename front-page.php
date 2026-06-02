<?php get_header('4');
/* Template Name: Front Page */
?>

<!-- Info Services Section -->
<section class="slide-bottom">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="deps1">
                    <div class="bosluksocc"></div>
                    <div class="container">
                        <div class="row fdsf">
                            <?php if( have_rows('social') ): ?>
                            <?php while( have_rows('social') ): the_row();
                            //vars
                            $icon = get_sub_field('icon');
                            $title = get_sub_field('title');
                            $link = get_sub_field('link');
                            ?>
                            <div class="col-md-4">
                                <a href="<?php echo $link; ?>"><i class="<?php echo $icon; ?> iconsociaslider"></i> <span class="soca"><?php echo $title; ?></span> </a>
                            </div>
                            <?php endwhile; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="deps2">
                    <div class="container">
                        <div class="row">
                            <?php $rightsection = get_field('right_section');?>
                            <div class="col-lg-2">
                                <a href="<?php echo $rightsection ['video_link']; ?>" class="vbtn-fluid44 vp-a vp-yt-type"><i class="flaticon-play vdslidericon"></i></a>
                            </div>
                            <div class="col-lg-6">
                                <div class="boslukor22"></div>
                                <p class="slidetxbot">
                                    <?php echo $rightsection ['text']; ?>
                                </p>
                            </div>
                            <div class="col-lg-4">
                                <div class="bosluk3to"></div>
                                <a class="btn-33" href="<?php echo $rightsection ['link']; ?>"><p class="btnn2"><?php echo $rightsection ['button_text']; ?></p></a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Info Services Section -->
<?php $infoservicessec = get_field('info_services_seciton');?>
<section class="info-featured">
    <div class="container">
    <?php $rightimage = get_field('right_image');?>
        <div class="row">
            <div class="col-lg-6 bb"></div>
            <div class="col-lg-6 bb wow <?php echo $rightimage['effect']; ?>" data-wow-delay="<?php echo $rightimage['duration']; ?>s">
                <img src="<?php echo $rightimage['image']; ?>" alt="">
            </div>
        </div>
    </div>
    <div class="container ozset">
        <div class="row ff"> 
            <div class="col-lg-6 bb">
            <?php $leftsection = get_field('left_section');?>
            <h2 class="h2-baslik-anasayfa-ozel btw wow <?php echo $leftsection ['effect_1'];?>" data-wow-delay="0.4s"> <?php echo $leftsection ['title'];?> </h2>
            <div class="bosluk333"></div>
            <p class="paragraf wow <?php echo $leftsection ['effect_2'];?>" data-wow-delay="0.5s">
            <?php echo $leftsection ['text'];?>
            <div class="bosluk333"></div>
            </div>
            <div class="col-lg-6"></div>
        <?php if( have_rows('information_box_1') ): ?>
        <?php while( have_rows('information_box_1') ): the_row();
        //vars
        $icon1 = get_sub_field('icon_1');
        $title1 = get_sub_field('title_1');
        $text1 = get_sub_field('text_1');
        $effect1 = get_sub_field('effect_1');
        $duration1 = get_sub_field('duration_1');
        $link1 = get_sub_field('link_1');
        $date1 = get_sub_field('date_1');
        $buttontext1 = get_sub_field('button_text_1');
        $icon2 = get_sub_field('icon_2');
        $title2 = get_sub_field('title_2');
        $text2 = get_sub_field('text_2');
        $effect2 = get_sub_field('effect_2');
        $duration2 = get_sub_field('duration_2');
        $link2 = get_sub_field('link_2');
        $date2 = get_sub_field('date_2');
        $buttontext2 = get_sub_field('button_text_2');
        ?>
        <div class="col-lg-3 ds wow <?php echo $effect1; ?>" data-wow-delay="<?php echo $duration1; ?>s">
        <div class="dep" onclick="location.href='<?php echo $link1; ?>';" style="cursor:pointer;">
            <div class="or56">
                <div class="iconwr or56"><p class="dzv"><i class="<?php echo $icon1; ?>"></i></p></div>
                        <div class="bosluk333"></div>
                        <h3 class="prongl"><?php echo $title1; ?></h3>
                        <h4 class="infostextgl"><?php echo $date1; ?></h4>
                </div>
            </div>
        </div>
        <div class="col-lg-3 ds wow <?php echo $effect2; ?>" data-wow-delay="<?php echo $duration2; ?>s">
        <div class="dep" onclick="location.href='<?php echo $link2; ?>';" style="cursor:pointer;">
            <div class="or56">
                <div class="iconwr or56"><p class="dzv"><i class="<?php echo $icon2; ?>"></i></p></div>
                        <div class="bosluk333"></div>
                        <h3 class="prongl"><?php echo $title2; ?></h3>
                        <h4 class="infostextgl"><?php echo $date2; ?></h4>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
        </div>
        <div class="col-lg-3">
        </div>
        <?php endwhile; ?>
        <?php endif; ?>
        </div>
        <div class="container">
            <div class="row">
                <?php $leftsection = get_field('left_section');?>
                <div class="col-lg-6">
                    <div class="or wow <?php echo $leftsection ['effect_3'];?>" data-wow-delay="0.5s">
                        <a class="btn-3" href="<?php echo $leftsection ['link'];?>"><p class="btnn2"><?php echo $leftsection ['button_text'];?></p></a>
                    </div>
                </div>
                <div class="col-lg-6"></div>
            </div>
        </div>
    </div>
</section>

<!--About Info Alanı-->
<?php $aboutus_3D = get_field('3d_about_us');?>
<section class="hakkimizda-bolumu-anasayfa">
<div class="h-yazi-ozel h-yazi-margin-ozel">           
</div>
<div class="container">
    <div class="row">
    <div class="col-lg-6 uo">
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
        <div class="bosluk12b"></div>
        <a href="<?php echo $aboutus_3D ['right_button_about_link'];?>" class="btn-3 wow <?php echo $aboutus_3D ['right_button_text_about_text_effect'];?>" data-wow-delay="0.8s"><p class="btnn2"><?php echo $aboutus_3D ['right_button_text_about_text'];?></p></a>
            <div class="bosluk3rh"></div>
    </div>
    </div>
</div>
</section>

<!--Markalar Alanı-->
<?php $customerssection = get_field('customers_section');?>
<section class="markalar">
<div class="container">
        <div class="row">
            <div class="col-lg-12 wow <?php echo $customerssection ['effect_1'];?>" data-wow-delay="0.4s">
                <h2 class="h2-baslik-hizmetler-2"> <?php echo $customerssection ['big_title'];?> </h2>
                <p class="services-kutu2--yazi1 wow fade animated" style="visibility: visible;">
                <?php echo $customerssection ['text'];?>
                </p>
            </div>
        </div>
    </div>
    <div class="bosluk333"></div>
    <div class="container">
        <div class="row uu">     
    <?php if( have_rows('customers') ): ?>

        <?php while( have_rows('customers') ): the_row();

        //vars
        $image = get_sub_field('image');
        $link = get_sub_field('link');
        ?>
    <div class="col-lg-2">
    <div class="h-yazi-ortalama h-yazi-margin-kucuk-21 wow animated fadeInUp animated" data-wow-delay="0.5s">
        <a href="<?php echo $link; ?>"><img src="<?php echo $image; ?>" alt="Marka 1" class="marka"></a>
    </div>
    </div>
    <?php endwhile; ?>   
    <?php endif; ?> 
    </div>
    </div>
</section>

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

<!--Cases-->
<section class="sectionbars">
<?php $servicessection = get_field('services_section');?>
<div class="container">
    <div class="row">
        <div class="col-lg-10">
            <h2 class="h2-baslik-anasayfa-wtbb wow fade"><?php echo $servicessection ['title'];?></h2>
            <p class="services-kutu2--wtbb wow fade animated" style="visibility: visible;">
            <?php echo $servicessection ['text'];?>
            </p>
        </div>
        <div class="col-lg-2">
            <a class="btn-3" href="<?php echo $servicessection ['link'];?>"><p class="btnn2"><?php echo $servicessection ['button_text'];?></p></a>
        </div>
    </div>
</div>
</section>
<div class="boslukcase"></div>
<section class="serviceb-alani wow animated fadeInUp animated" data-wow-delay="0.5s">
<div class="container">
        <div class="row">
            <div class="col-12">
                <div class="carousel-classes">
                <div class="swiper-wrapper">
                <?php if( have_rows('services') ): ?>
                <?php while( have_rows('services') ): the_row();
                //vars
                $image = get_sub_field('image');
                $effect = get_sub_field('effect');
                $duration = get_sub_field('duration');
                $link = get_sub_field('link');
                $buttontext = get_sub_field('button_text');
                $text = get_sub_field('text');
                ?>
                <div class="swiper-slide wow animated fadeInLeft animated" data-wow-delay="0.5s">
                <div class="box-style2 box-primary-color2">
                    <img class="efozel2" src="<?php echo $image; ?>" alt="">
                    <div class="bosluk333"></div>
                    <div class="descontent">
                        <p class="services-kutu2--wts3 wow fade animated" style="visibility: visible;">
                        <?php echo $text; ?>
                        </p>
                        <div class="bosluk333"></div>
                        <div class="orserv">
                            <a class="btn-3" href="<?php echo $link; ?>"><p class="btnn2"><?php echo $buttontext; ?></p></a>
                        </div>
                    </div>
                </div>
                <!-- end swiper-slide -->
                </div>
                <?php endwhile; ?>   
                <?php endif; ?> 
                </div>
                <div class="swiper-pagination"></div>
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