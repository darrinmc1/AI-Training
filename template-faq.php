<?php
get_header('2');
/* Template Name: Faq */
?>

<!--FAQ-->
<?php $aboutus_3D2 = get_field('3d_about_us2');?>
<section class="fq2">
<div class="h-yazi-ozel h-yazi-margin-ozel">           
</div>
<div class="tablo">
    <div class="tablo--1-ve-2">
        <div class="galeri wow <?php echo $aboutus_3D2 ['about_image_effect'];?>" data-wow-delay="<?php echo $aboutus_3D2 ['about_image_duration'];?>s">
            <img src="<?php echo $aboutus_3D2 ['about_image'];?>" alt="About" class="galeri__gorsel galeri__gorsel--395 zimage">
        </div>
    </div>         
    <!--Galeri Görsel Alanı-->
    <div class="tablo--1-ve-3 wow fadeInUp" data-wow-delay="0.3s">
    <p class="paragraf wow <?php echo $aboutus_3D2 ['right_text_about_effect'];?>" data-wow-delay="0.5s">
    <?php echo $aboutus_3D2 ['right_text_about'];?>
    <div class="bosluk333"></div>
    <div class="wrapper"> 
                    <?php if ( have_rows( 'faq' ) ) : ?> 
                    <?php while ( have_rows( 'faq' ) ) : the_row(); 
                    
                    $title = get_sub_field('title');
                    $description = get_sub_field('description');
                    ?> 
                    <div class="container asa">
                        <div class="question">
                            <?php echo $title; ?>
                        </div>
                        <div class="answercont">
                            <div class="answer">
                            <?php echo $description; ?>
                            </div>
                        </div>
                    </div>
                    <?php endwhile; ?> 
                    <?php endif; ?>
                </div>
        <div class="bosluk333"></div>
    </div>
</div>
</section>
<div class="bosluk4"></div>

<?php get_footer();?>