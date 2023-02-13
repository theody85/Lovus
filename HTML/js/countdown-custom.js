jQuery(document).ready(function () {
  jQuery(function () {
    jQuery('#defaultCountdown').countdown({
      until: new Date(2023, 01, 18, 13),
    }); // year, month, date, hour
  });
});
