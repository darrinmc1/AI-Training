<?php
get_header('2');
/* Template Name: Projects */
?>

<!--Projects-->
<section class="sectionbars3">
<?php $projectssec = get_field('projects_section');?>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="h2-baslik-anasayfa-wtbb wow fade"><?php echo $projectssec ['title'];?></h2>
            <p class="services-kutu2--wtbb wow fade animated" style="visibility: visible;">
            <?php echo $projectssec ['text'];?>
            </p>
            <div class="bosluk3"></div>
        </div>
    </div>
</div>
</section>
<section class="serviceb-alani2 wow animated fadeInUp animated" data-wow-delay="0.5s">
    <div class="container">  
        <div class="row">
            <?php if( have_rows('projects') ): ?>
            <?php while( have_rows('projects') ): the_row();
            //vars
            $image = get_sub_field('image');
            $effect = get_sub_field('effect');
            $duration = get_sub_field('duration');
            $link = get_sub_field('link');
            $buttontext = get_sub_field('button_text');
            $text = get_sub_field('text');
            ?>
            <div class="col-xl-3 dd wow <?php echo $effect; ?>" data-wow-delay="<?php echo $duration; ?>s">
                <div class="box-style box-primary-color">
                    <img class="efozel2" src="<?php echo $image; ?>" alt="">
                    <div class="bosluk333"></div>
                    <div class="descontent">
                        <p class="services-kutu2--wts3 wow fade animated" style="visibility: visible;">
                        <?php echo $text; ?>
                        </p>
                        <div class="bosluk333"></div>
                        <div class="orserv">
                            <a class="btn-2" href="<?php echo $link; ?>"><p class="btnn2"><?php echo $buttontext; ?></p></a>
                        </div>
                    </div>
                </div>
            </div>
            <?php endwhile; ?>   
            <?php endif; ?> 
        </div>
    </div>
</section>

<?php get_footer(); ?>