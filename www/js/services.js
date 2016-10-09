angular.module('starter.services',[])
.service('WC', function(){
    return {
        WC: function(){
            var Woocommerce = new WooCommerceAPI.WooCommerceAPI({
                url: 'http://www.cocons.net/jus/',
                consumerKey: 'ck_40fa7204d2f2c10a95c66c63463b4d3e27795d2e',
                consumerSecret: 'cs_11330edeac5122c64dd28800b7aaf3cde1e24060'
            });
            return Woocommerce;
        }
}});