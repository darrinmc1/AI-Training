<?php
get_header('2');
/* Template Name: Customer Comments */
?>

<!--Yorumlar-->
<?php $commentssection = get_field('comments_section');?>
<section class="yorumlar-alani-sayfa">
<div class="hero66 wow <?php echo $commentssection ['effect_animation_1'];?>" data-wow-delay="<?php echo $commentssection ['duration_animation_1'];?>s">
    <img class="commentpeop1" src="<?php echo $commentssection ['animation_image_1'];?>" alt="" >
</div>
<div class="hero88 wow <?php echo $commentssection ['effect_animation_2'];?>" data-wow-delay="<?php echo $commentssection ['duration_animation_2'];?>s">
    <img class="commentpeop2" src="<?php echo $commentssection ['animation_image_2'];?>" alt="" >
</div>
<div class="hero88 wow <?php echo $commentssection ['effect_animation_3'];?>" data-wow-delay="<?php echo $commentssection ['duration_animation_3'];?>s">
    <img class="commentpeop3" src="<?php echo $commentssection ['animation_image_3'];?>" alt="" >
</div>
<div class="hero88 wow <?php echo $commentssection ['effect_animation_4'];?>" data-wow-delay="<?php echo $commentssection ['duration_animation_4'];?>s">
    <img class="commentpeop4" src="<?php echo $commentssection ['animation_image_4'];?>" alt="" >
</div>
    <div class="container">
        <div class="row">
        <div class="col-12 wow animated fadeIn animated" data-wow-delay="0.5s">
            <div class="h-yazi-ortalama h-yazi-margin-orta-3">
                <div class="icon wow <?php echo $commentssection ['icon_effect'];?>" data-wow-delay="0.5s"><i class="<?php echo $commentssection ['icon'];?>"></i></div>
                <h2 class="h2-baslik-hizmetler-yorum wow <?php echo $commentssection ['title_effect'];?>" data-wow-delay="0.5s"> <?php echo $commentssection ['title'];?> </h2> 
            </div>
                <p class="h2-baslik-hizmetler-yorum__yorum wow <?php echo $commentssection ['small_text_effect'];?>" data-wow-delay="0.5s">
                <?php echo $commentssection ['small_text'];?>
                </p>
                <div class="bosluk3a"></div>
            </div>
            <div class="col-12">
                <div class="carousel-classes">
                <div class="swiper-wrapper">
                <?php if( have_rows('comments') ): ?>
                <?php while( have_rows('comments') ): the_row();

                //vars
                $comment = get_sub_field('comment');
                $image = get_sub_field('image');
                $fullname = get_sub_field('full_name');

                ?>
                <div class="swiper-slide wow animated fadeInLeft animated" data-wow-delay="0.5s">
                    <div class="class-box">
                    <div class="testimonial-card">
                        <div class="testimon-text">
                        <?php echo $comment; ?>
                            <i class="fas fa-quote-right quote"></i>
                        </div>
                        <h2 class="h2-baslik-hizmetler-2cc"><?php echo $fullname; ?></h2>
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

<?php get_footer();?>