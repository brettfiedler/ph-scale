// Copyright 2002-2013, University of Colorado Boulder

/**
 * The graph for the 'Custom' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // imports
  var ChoiceSwitch = require( 'PH_SCALE/common/view/ChoiceSwitch' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var GraphUnits = require( 'PH_SCALE/common/view/GraphUnits' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Property = require( 'AXON/Property' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  // strings
  var molesString = require( 'string!PH_SCALE/units.moles' );
  var molesPerLiterString = require( 'string!PH_SCALE/units.molesPerLiter' );

  // constants
  var GRAPH_SIZE = new Dimension2( 325, 530 );

  function CustomGraphNode() {

    var thisNode = this;
    Node.call( thisNode );

    //TODO placeholder for approximate size of graph
    thisNode.addChild( new Rectangle( 0, 0, GRAPH_SIZE.width, GRAPH_SIZE.height, {
      stroke: 'rgb(200,200,200)',
      lineWidth: 2
    } ) );

    thisNode.addChild( new ChoiceSwitch( new Property( GraphUnits.MOLES_PER_LITER ), GraphUnits.MOLES_PER_LITER, molesPerLiterString, GraphUnits.MOLES, molesString, {
      font: new PhetFont( 18 ), size: new Dimension2( 40, 20 ), centerX: GRAPH_SIZE.width / 2, y: 10 } ) );
  }

  return inherit( Node, CustomGraphNode );
} );
