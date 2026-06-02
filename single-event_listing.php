<?php
get_header(3);
?>

<section>
 <div class="container">
    <div class="row">
     
     <div class="col-md-12">   
       
      <!-- Start the Loop -->
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
          <?php the_content(); ?>            
      <?php endwhile; ?>
      <?php endif; ?>
      <!-- End the Loop -->           
        <div class="bosluksv"></div>           
   </div>
    
  </div>
 </div>
</section>

<?php get_footer();?>