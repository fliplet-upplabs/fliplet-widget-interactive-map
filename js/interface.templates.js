this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.interface.add-markers"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"add-markers-component clearfix\">\n  <div v-show=\"savedData\" class=\"col-xs-8 maps-wrapper\">\n    <div v-if=\"isLoading\" class=\"maps-loading-holder\">\n      <div class=\"spinner-holder animated\">\n        <div class=\"spinner-overlay\">Loading...</div>\n        <p>Loading... Please wait!</p>\n      </div>\n    </div>\n    <div v-else class=\"maps-container\">\n      <div v-show=\"!mappedMarkerData.length\" class=\"no-markers\">\n        Your maps will appear here once you create a new marker.\n      </div>\n      <div v-show=\"mappedMarkerData.length\" class=\"map-wrapper-holder\">\n        <div v-for=\"(map, index) in widgetData.maps\" class=\"map-wrapper\" v-bind:class=\"{ 'active': selectedMarkerData.map && map.id === selectedMarkerData.map.id && imageLoaded }\">\n          <div class=\"map-container\" :id=\"'map-' + map.id\">\n            <img v-if=\"map.image\" class=\"map-image\" :src=\"map.image.url\"/>\n          </div>\n        </div>\n      </div>\n      <div v-if=\"selectedMarkerData.map && selectedMarkerData.map.name && mappedMarkerData.length\" class=\"maps-button\">\n        <i class=\"fa fa-map-marker\"></i>\n        <span class=\"map-button-text\"><p>{{selectedMarkerData.map.name}}</p></span>\n      </div>\n      <div v-if=\"selectedMarkerData.map && selectedMarkerData.map.name && mappedMarkerData.length\" class=\"map-hint-holder\">\n        <div class=\"map-hint\">Click the image to set the marker position</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"settings-holder\" v-bind:class=\"{ 'col-xs-12 less-bottom-padding': !savedData, 'col-xs-4 with-border': savedData }\">\n    <div class=\"marker-settings-wrapper\">\n      <div class=\"form-group clearfix\">\n        <div class=\"col-sm-12 control-label\">\n          <label>Markers data source</label>\n        </div>\n        <div v-if=\"!manualSelectDataSource\" class=\"col-sm-12\">\n          We have created a data source for you called <strong>{{markersDataSource.name}}</strong>.<br>\n          <span>\n            <a href=\"#\" @click.prevent=\"editDataSource\">Edit data</a> | \n            <a href=\"#\" @click.prevent=\"chooseExistingData\" v-if=\"!savedData\">Switch to another data source</a>\n            <a href=\"#\" @click.prevent=\"changeSettings\" v-else>Change data settings</a>\n          </span>\n        </div>\n        <div v-if=\"manualSelectDataSource\" class=\"col-sm-12\">\n          <multiselect v-model=\"markersDataSource\" :options=\"dataSources\" :custom-label=\"nameWithId\" placeholder=\"-- Select a data source\" label=\"name\" :show-labels=\"false\" :allow-empty=\"false\" :show-no-results=\"false\"></multiselect>\n        </div>\n      </div>\n      <div v-if=\"!savedData\">\n        <div class=\"form-group clearfix\">\n          <div class=\"col-sm-12 control-label\">\n            <label>Marker name field</label>\n          </div>\n          <div class=\"col-sm-12\">\n            <multiselect v-model=\"markerNameColumn\" :options=\"markerFieldColumns\" placeholder=\"-- Select a field\" :show-labels=\"false\" :allow-empty=\"false\" :show-no-results=\"false\"></multiselect>\n          </div>\n        </div>\n        <div class=\"form-group clearfix\">\n          <div class=\"col-sm-12 control-label\">\n            <label>Map name field</label>\n          </div>\n          <div class=\"col-sm-12\">\n            <multiselect v-model=\"markerMapColumn\" :options=\"markerFieldColumns\" placeholder=\"-- Select a field\" :show-labels=\"false\" :allow-empty=\"false\" :show-no-results=\"false\"></multiselect>\n          </div>\n        </div>\n        <div class=\"form-group clearfix\">\n          <div class=\"col-sm-12 control-label\">\n            <label>Marker type field</label>\n          </div>\n          <div class=\"col-sm-12\">\n            <multiselect v-model=\"markerTypeColumn\" :options=\"markerFieldColumns\" placeholder=\"-- Select a field\" :show-labels=\"false\" :allow-empty=\"false\" :show-no-results=\"false\"></multiselect>\n          </div>\n        </div>\n        <div class=\"form-group clearfix\">\n          <div class=\"col-sm-12 control-label\">\n            <label>Marker X position field</label>\n          </div>\n          <div class=\"col-sm-12\">\n            <multiselect v-model=\"markerXPositionColumn\" :options=\"markerFieldColumns\" placeholder=\"-- Select a field\" :show-labels=\"false\" :allow-empty=\"false\" :show-no-results=\"false\"></multiselect>\n          </div>\n        </div>\n        <div class=\"form-group clearfix\">\n          <div class=\"col-sm-12 control-label\">\n            <label>Marker Y position field</label>\n          </div>\n          <div class=\"col-sm-12\">\n            <multiselect v-model=\"markerYPositionColumn\" :options=\"markerFieldColumns\" placeholder=\"-- Select a field\" :show-labels=\"false\" :allow-empty=\"false\" :show-no-results=\"false\"></multiselect>\n          </div>\n        </div>\n        <div class=\"form-group clearfix\">\n          <div class=\"col-sm-12\">\n            <div class=\"btn btn-default\" @click.prevent=\"useSettings\">Use these settings</div>\n          </div>\n        </div>\n      </div>\n      <div v-else class=\"markers-ui-wrapper\">\n        <div class=\"form-group clearfix markers-ui-holder\">\n          <div class=\"col-sm-12 control-label\">\n            <label>Configure the markers</label>\n          </div>\n          <div v-if=\"isLoading\" class=\"col-sm-12 markers-ui-loading\">\n            <div class=\"spinner-holder animated\">\n              <div class=\"spinner-overlay\">Loading...</div>\n              <p>Loading... Please wait!</p>\n            </div>\n          </div>\n          <div v-else class=\"col-sm-12 markers-ui\">\n            <div v-if=\"!mappedMarkerData.length\" class=\"no-markers\">\n              Use the button below to add a new marker to your map.\n            </div>\n            <div v-else v-for=\"(markerInfo, index) in mappedMarkerData\" class=\"marker-holder\" v-bind:class=\"{ 'active': activeMarker === index }\" @click.prevent=\"setActiveMarker(index)\">\n              <div class=\"marker-wrapper\">\n                <div v-if=\"markerInfo.data.updateName\" class=\"marker-name-edit-holder\">\n                  <input v-model=\"markerInfo.data.name\" :ref=\"'changename-' + index\" class=\"form-control\" @keyup.enter=\"confirmName(index)\" @keyup.esc=\"cancelNameUpdate(index)\"/> <i class=\"fa fa-check-circle\" @click.prevent=\"confirmName(index)\"></i> <i class=\"fa fa-ban\" @click.prevent=\"cancelNameUpdate(index)\"></i>\n                </div>\n                <div v-else class=\"marker-name-holder\">\n                  <span>{{markerInfo.data.name}}</span> <i class=\"fa fa-pencil\" @click.prevent=\"toUpdateName(index, markerInfo.data.name)\"></i>\n                </div>\n                <div class=\"marker-map-holder\">\n                  <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      <template v-if=\"markerInfo.data && markerInfo.data.map\">\n                        {{markerInfo.data.map}}\n                      </template>\n                      <template v-else>\n                        &nbsp;\n                      </template>\n                      <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu dropdown-menu-right\">\n                      <li v-for=\"map in widgetData.maps\"><a href=\"#\" @click.prevent=\"updateMap(map.name, index)\">{{map.name}}</a></li>\n                    </ul>\n                  </div>\n                </div>\n                <div class=\"marker-icon-holder\">\n                  <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      <template v-if=\"markerInfo.data && markerInfo.data.icon && markerInfo.data.color\">\n                        <i :class=\"markerInfo.data.icon + ' fa-fw'\" :style=\"'color: ' + markerInfo.data.color\"></i>\n                      </template>\n                      <template v-else>\n                        &nbsp;\n                      </template>\n                      <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu dropdown-menu-right\">\n                      <li v-for=\"marker in widgetData.markers\"><a href=\"#\" @click.prevent=\"updateMarker(marker, index)\">{{marker.name}} <i :class=\"marker.icon + ' fa-fw'\" :style=\"'color: ' + marker.color\"></i></a></li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"marker-delete-holder\" @click.stop=\"deleteMarker(index)\">\n                <i class=\"fa fa-trash\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"settings-buttons-wrapper\" v-if=\"savedData\">\n      <div class=\"btn btn-secondary\" @click.prevent=\"addNewMarker\">Add new marker</div>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.interface.map-panel"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n  <div class=\"form-group clearfix\">\n    <div class=\"col-sm-4 control-label\">\n      <label>Map name</label>\n    </div>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" v-model.trim=\"name\" @keyup=\"onInputData\"/>\n    </div>\n  </div>\n\n  <div class=\"form-group clearfix\">\n    <div class=\"col-sm-4 control-label\">\n      <label>Map image</label>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"selected-image-container\">\n        <div class=\"btn btn-default\" @click.prevent=\"openMapPicker\">\n          <span v-if=\"image\">Replace image</span>\n          <span v-else>Select an image</span>\n        </div>\n        <div v-if=\"image\" class=\"selected-image-holder\">\n          <img :src=\"image.url\"/>\n        </div>\n      </div>\n      <div v-if=\"image\" class=\"selected-image-name\">{{image.name}}</div>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.interface.marker-panel"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n  <div class=\"form-group clearfix\">\n    <div class=\"col-sm-4 control-label\">\n      <label>Marker name</label>\n    </div>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" v-model.trim=\"name\" @keyup=\"onInputData\"/>\n    </div>\n  </div>\n\n  <div class=\"form-group clearfix\">\n    <div class=\"col-sm-4 control-label\">\n      <label>Marker icon</label>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"btn btn-default\" @click.prevent=\"openIconPicker\">\n        <span v-if=\"icon\">Replace icon</span>\n        <span v-else>Select an icon</span>\n      </div>\n      <div v-if=\"icon\" class=\"icon-holder\">\n        <div class=\"icon-wrapper\">Selected icon: <i :class=\"'selected-icon ' + icon\"></i></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group clearfix\">\n    <div class=\"col-sm-4 control-label\">\n      <label>Marker color</label>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"input-group\" colorpicker-component>\n        <div class=\"input-group-addon\"><i :style=\"'background-color: ' + color\"></i></div>\n        <input type=\"text\" :id=\"'list-item-color-' + id\" class=\"form-control list-item-color\" v-model=\"color\" @keyup=\"onInputData\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group clearfix\">\n    <div class=\"col-sm-4 control-label\">\n      <label>Marker size</label>\n    </div>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" v-model.trim=\"size\" @keyup=\"onInputData\"/>\n    </div>\n  </div>\n</div>";
},"useData":true});