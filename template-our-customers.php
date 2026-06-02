<?php
get_header('2');
/* Template Name: Our Customers */
?>

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

<?php get_footer();?>