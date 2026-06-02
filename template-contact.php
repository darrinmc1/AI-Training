<?php
get_header('2');
/* Template Name: Contact */
?>

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

<section>
<div class="container">
    <div class="row">
    <div class="depcc">
        <div class="container">
            <div class="row">
                <?php if( have_rows('contact_us') ): ?>
                <?php while( have_rows('contact_us') ): the_row();
                //vars
                $contact = get_sub_field('contact');
                $icon = get_sub_field('icon');
                ?>
                <div class="col-lg">
                    <div class="icon"><i class="<?php echo $icon; ?>"></i></div>
                    <?php echo $contact; ?>
                </div>
                <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
        </div>
    </div>
</div>
</section>

<?php if ( $google_maps_iframe = get_field( 'google_maps_iframe' ) ) : ?> <?php echo $google_maps_iframe; ?> <?php endif; ?>

<?php get_footer();?>