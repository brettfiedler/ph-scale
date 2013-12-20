// Copyright 2002-2013, University of Colorado Boulder

/**
 * Solute model, with instances used by this sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // imports
  var Color = require( 'SCENERY/util/Color' );
  var Property = require( 'AXON/Property' );
  var Water = require( 'PH_SCALE/common/model/Water' );

  // strings
  var drainCleanerString = require( 'string!PH_SCALE/choice.drainCleaner' );
  var handSoapString = require( 'string!PH_SCALE/choice.handSoap' );
  var bloodString = require( 'string!PH_SCALE/choice.blood' );
  var spitString = require( 'string!PH_SCALE/choice.spit' );
  var milkString = require( 'string!PH_SCALE/choice.milk' );
  var chickenSoupString = require( 'string!PH_SCALE/choice.chickenSoup' );
  var coffeeString = require( 'string!PH_SCALE/choice.coffee' );
  var beerString = require( 'string!PH_SCALE/choice.beer' );
  var sodaString = require( 'string!PH_SCALE/choice.soda' );
  var vomitString = require( 'string!PH_SCALE/choice.vomit' );
  var batteryAcidString = require( 'string!PH_SCALE/choice.batteryAcid' );
  var customString = require( 'string!PH_SCALE/choice.custom' );

  /**
   * @param {String} name
   * @param {Number} pH
   * @param {*} colors
   *
   * colors is an object literal with these properties:
   * {Color} stockColor: color of the solute in stock solution (no dilution)
   * {Color} dilutedColor: color when the solute is barely present in solution (fully diluted), optional, defaults to Water.color
   * {Color} midpointColor: color when we have a 50/50 mix of solute and solvent, used to smooth out some color transitions if provided, optional
   */
  function Solute( name, pH, colors ) {

    this.name = name;
    this.pHProperty = new Property( pH );

    // unpack the colors to make accessing them more convenient in client code
    this.stockColor = colors.stockColor;
    this.dilutedColor = colors.dilutedColor || Water.color;
    this.midpointColor = colors.midpointColor; // optional, so may be undefined, no default necessary
  }

  // 'real world' immutable solutions
  Solute.DRAIN_CLEANER = new Solute( drainCleanerString, 13, { stockColor: new Color( 255, 255, 0 ), midpointColor: new Color( 255, 255, 204 ) } );
  Solute.HAND_SOAP = new Solute( handSoapString, 10, { stockColor: new Color( 204, 0, 204 ), midpointColor: new Color( 232, 204, 255 ) } );
  Solute.BLOOD = new Solute( bloodString, 7.4, { stockColor: new Color( 185, 12, 0 ), midpointColor: new Color( 255, 207, 204 ) } );
  Solute.SPIT = new Solute( spitString, 7.4, { stockColor: new Color( 202, 240, 239 ) } );
  Solute.MILK = new Solute( milkString, 6.5, { stockColor: new Color( 250, 250, 250 ) } );
  Solute.CHICKEN_SOUP = new Solute( chickenSoupString, 5.8, { stockColor: new Color( 255, 240, 104 ), midpointColor: new Color( 255, 250, 204 ) } );
  Solute.COFFEE = new Solute( coffeeString, 5.0, { stockColor: new Color( 164, 99, 7 ), midpointColor: new Color( 255, 240, 204 ) } );
  Solute.BEER = new Solute( beerString, 4.5, { stockColor: new Color( 255, 200, 0 ), midpointColor: new Color( 255, 242, 204 ) } );
  Solute.SODA = new Solute( sodaString, 2.5, { stockColor: new Color( 204, 255, 102 ), midpointColor: new Color( 238, 255, 204 ) } );
  Solute.VOMIT = new Solute( vomitString, 2, { stockColor: new Color( 255, 171, 120 ), midpointColor: new Color( 255, 224, 204 ) } );
  Solute.BATTERY_ACID = new Solute( batteryAcidString, 1, { stockColor: new Color( 255, 255, 0 ), midpointColor: new Color( 255, 224, 204 ) } );

  // 'magical' mutable solution
  Solute.CUSTOM = new Solute( customString, 7, { stockColor: new Color( 251, 236, 150 ) } );

  return Solute;
} );
