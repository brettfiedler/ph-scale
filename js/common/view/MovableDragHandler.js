// Copyright 2002-2013, University of Colorado Boulder

/**
 * A drag handler for something that is Movable and constrained to some (optional) bounds.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var SimpleDragHandler = require( 'SCENERY/input/SimpleDragHandler' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {Movable} movable
   * @param {ModelViewTransform2} mvt
   * @param {*} options
   * @constructor
   */
  function MovableDragHandler( movable, mvt, options ) {

    options = _.extend( {
      endDrag: function() { /* do nothing */ }  // use this to do things at the end of dragging, like 'snapping'
    }, options );

    var startOffset; // where the drag started, relative to the Movable's origin, in parent view coordinates

    SimpleDragHandler.call( this, {

      allowTouchSnag: true,

      // note where the drag started
      start: function( event ) {
        var location = mvt.modelToViewPosition( movable.locationProperty.get() );
        startOffset = event.currentTarget.globalToParentPoint( event.pointer.point ).minus( location );
      },

      // change the location, adjust for starting offset, constrain to drag bounds
      drag: function( event ) {
        var parentPoint = event.currentTarget.globalToParentPoint( event.pointer.point ).minus( startOffset );
        var location = mvt.viewToModelPosition( parentPoint );
        var constrainedLocation = constrainBounds( location, movable.dragBounds );
        movable.locationProperty.set( constrainedLocation );
      },

      end: function( event ) {
        options.endDrag();
      }
    } );
  }

  /**
   * Constrains a point to some bounds.
   * @param {Vector2} point
   * @param {Bounds2} bounds
   */
  var constrainBounds = function( point, bounds ) {
    if ( _.isUndefined( bounds ) || bounds.containsCoordinates( point.x, point.y ) ) {
      return point;
    }
    else {
      var xConstrained = Math.max( Math.min( point.x, bounds.maxX ), bounds.x );
      var yConstrained = Math.max( Math.min( point.y, bounds.maxY ), bounds.y );
      return new Vector2( xConstrained, yConstrained );
    }
  };

  return inherit( SimpleDragHandler, MovableDragHandler );
} );
