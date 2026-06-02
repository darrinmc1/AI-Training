<?php
get_header('2');
/* Template Name: Packages */
?>

<!--pack 1-->
<?php $packsection = get_field('3d_packs_section');?>

<section class="special-paket-alani">
    <div class="h-yazi-ortalama h-yazi-margin-orta-3">
        <div class="icon wow <?php echo $packsection ['icon_effect'];?>" data-wow-delay="0.3s"><i class="<?php echo $packsection ['icon'];?>"></i></div>
        <h2 class="h2-baslik-hizmetler-2 wow <?php echo $packsection ['title_effect'];?>" data-wow-delay="0.4s"> <?php echo $packsection ['title'];?> </h2>
    </div>
    <p class="h2-baslik-hizmetler-2__paragraf wow <?php echo $packsection ['small_text_effect'];?> " data-wow-delay="0.6s">
    <?php echo $packsection ['small_text'];?>  
    </p>
    <div class="bosluk3"></div>
        <div class="tablo">
        <?php if( have_rows('3d_packs') ): ?>
            <?php while( have_rows('3d_packs') ): the_row();
            //vars
            $icon = get_sub_field('icon');
            $title = get_sub_field('title');
            $description = get_sub_field('description');
            $list = get_sub_field('list');
            $backtitle = get_sub_field('back_title');
            $price = get_sub_field('price');
            $buttontext = get_sub_field('button_text');
            $link = get_sub_field('link');
            $effect = get_sub_field('effect');
            $duration = get_sub_field('duration');
            $popupforms = get_sub_field('popup_forms');
            ?>
            <div class="tablo--1-ve-3">
                <div class="paketler3 wow <?php echo $effect;?>" data-wow-delay="<?php echo $duration;?>s" data-tilt>
                    <div class="paketler3__on paketler3__on--onyazi">
                        <div class="paketler3__gorsel paketler3__gorsel--1">
                        <div class="iconw"><i class="<?php echo $icon;?>"></i></div>
                        <h3 class="baslik-sol h-yazi-margin-kucuk"><?php echo $title;?></h3>
                        <p class="services-kutu2--yazi wow fade">
                        <?php echo $description;?>
                        </p>
                        </div>
                        <div class="paketler3__icerik">
                            <?php echo $list;?>
                        </div>
                    </div>
                    <div class="paketler3__on paketler3__on--arkayazi paketler3__on--arkayazi-1">
                        <div class="paketler3__pr">
                            <div class="paketler3__pr-kutu">
                                <p class="paketler3__pr-yazi"><?php echo $backtitle;?></p>
                                <p class="paketler3__pr-degeri"><?php echo $price;?></p>
                            </div>
                            <a href="<?php echo $link;?>" class="custom-button"><?php echo $buttontext;?></a>
                        </div>
                    </div>
                </div>
                <!-- POPUP FORMS -->
            <?php echo $popupforms;?>
            </div>        
    <?php endwhile; ?>   
        </div>
    <?php endif; ?> 
</section>                                    

<?php get_footer();?>