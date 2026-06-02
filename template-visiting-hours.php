<?php
get_header('2');
/* Template Name: Visiting Hours */
?>

<!--Visiting Hours-->
<?php $aboutus_3D2 = get_field('3d_about_us2');?>
<section class="visit4">
<div class="container">
    <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
        <?php echo $aboutus_3D2 ['visiting_details'];?>
        </div>
        <div class="col-lg-2"></div>
    </div>        
</div>
</section>

<?php get_footer();?>