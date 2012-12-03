/*
    datatable.js
    Author: James Holland jholland@usgs.gov
    datatable.js contains functions functions for the datatable found on both summary and station pages 
    License: Public Domain
 */

function bindDatatableActions(datatable) {
    $('#grid tbody td').click(function(){
        createDialog($(this).attr('id'));
    });
}