<?php
get_header('2');
/* Template Name: Our Team */
?>

<main>
<!--TITLE-->
<?php $teamsection = get_field('team_section');?>
<section class="ozellika" data-background="#000000">
    <div class="container">
        <div class="row align-items-center no-gutters">
            <div class="col-lg-12">
                <div class="wow fadeInUp" data-wow-delay="0.3s">
                    <div class="boslukalt"></div>
                    <h2 class="h2-baslik-hizmetler-2 wow <?php echo $teamsection ['title_effect'];?>" data-wow-delay="0.4s"> <?php echo $teamsection ['big_title'];?> </h2>
                    <p class="h2-baslik-hizmetler-2__paragraf wow <?php echo $teamsection ['small_text_effect'];?>" data-wow-delay="0.4s">
                    <?php echo $teamsection ['small_text'];?>
                    </p>   
                </div>
            </div>
        </div>
    </div>
</section>   
<div class="bosluk3"></div> 
<!--Team Alanı-->
    <section class="team-section">
    <div class="container">
        <div class="row">
            <?php if( have_rows('team') ): ?>
                <?php while( have_rows('team') ): the_row();
                //vars
                $image = get_sub_field('image');
                $fullname = get_sub_field('full_name');
                $jobtitle = get_sub_field('job_title');
                $effect = get_sub_field('effect');
                $duration = get_sub_field('duration');
                $teamlink = get_sub_field('link_1');
                $facelink = get_sub_field('link_2');
                $instalink = get_sub_field('link_3');
                $twitlink = get_sub_field('link_4');
                $linkedinlink = get_sub_field('link_5');

                ?>
                <div class="col-xl-3">
                    <div class="class-box">
                        <div class="services-kutu2 wow <?php echo $effect; ?>" data-wow-delay="<?php echo $duration; ?>s" style="cursor:pointer;">
                            <div class="member-box wow reveal-effect">
                                <figure> <img src="<?php echo $image; ?>" alt="Image">
                                    <figcaption>
                                    <h6><?php echo $fullname; ?></h6>
                                    <p class="paragraf-sol-beyaz-orta"><?php echo $jobtitle; ?></p>
                                    <ul>
                                        <li><a href="<?php echo $facelink; ?>" class="fa fa-facebook"></a></li>
                                        <li><a href="<?php echo $instalink; ?>" class="fa fa-instagram"></a></li>
                                        <li><a href="<?php echo $twitlink; ?>" class="fa fa-twitter"></a></li>
                                        <li><a href="<?php echo $linkedinlink; ?>" class="fa fa-linkedin"></a></li>
                                    </ul>
                                    </figcaption>
                                </figure>
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