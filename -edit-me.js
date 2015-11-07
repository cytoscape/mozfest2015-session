var cy; // global so you can play with it in the debugger console easily

// you can find the documentation for cytoscape.js at
// http://js.cytoscape.org

document.addEventListener( 'DOMContentLoaded', function() { // on dom ready

  cy = cytoscape( {
    container: document.getElementById('cy'),

    style: [
      {
        selector: 'node',
        style: {
          'height': 20,
          'width': 20
          // fill in some style for nodes here
        }
      },

      {
        selector: 'edge',
        style: {
          'width': 2,
          'opacity': 0.333,
          'curve-style': 'haystack'
          // fill in some style for edges here
        }
      },

      // some selector blocks you may want to use with the sample data:

      {
        selector: 'node:selected',
        style: {
          'background-color': 'black'
        }
      },

      {
        selector: 'edge:selected',
        style: {
          'line-color': 'black'
        }
      },

      {
        selector: 'node[?query]',
        style: {
          // try adding some style to query genes
        }
      },

      {
        selector: 'edge[group="coexp"]',
        style: {
          // style for coexpression interactions
        }
      },

      {
        selector: 'edge[group="coloc"]',
        style: {
          // style for colocation interactions
        }
      },

      {
        selector: 'edge[group="gi"]',
        style: {
          // style for genetic interactions
        }
      },

      {
        selector: 'edge[group="predict"]',
        style: {
          // style for predicted interactions
        }
      },

      {
        selector: 'edge[group="spd"]',
        style: {
          // style for shared protein domain interactions
        }
      },

      {
        selector: 'edge[group="reg"]',
        style: {
          // style for regulatory interactions
        }
      }

      // try creating your own selector blocks and style
    ],

    // use the sample data
    // node.data('score') ranges on 0 to ~0.0067
    elements: elements

    // replace this with your own data if you like, e.g.:
    /*
    elements: [
      { // node n1
        data: { id: 'n1' }
      },

      { // node n2
        data: { id: 'n2' }
      },

      { // edge e1
        data: { id: e1, source: 'n1', target: 'n2' }
      }
    ]
    */
  } );

  // now you can play with the graph here, e.g.:
  cy.nodes()[0].select();

  // play with extensions, add features to the graph etc.

  // have fun :)

} ); // on dom ready
