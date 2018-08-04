import { graphql } from 'gatsby';
import React from 'react';

import Heading from '../../components/Heading';
import Callout from '../../components/Callout';
import CodeBlock from '../../components/CodeBlock';
import ComponentApi from '../../components/ComponentApi';
import ReactPlayground from '../../components/ReactPlayground';
import NavbarBasic from '../../examples/Navbar/Basic';
import NavbarBrand from '../../examples/Navbar/Brand';
import NavbarCollapsible from '../../examples/Navbar/Collapsible';
import NavbarColorSchemes from '../../examples/Navbar/ColorSchemes';
import NavbarForm from '../../examples/Navbar/Form';
import NavbarTextLink from '../../examples/Navbar/TextLink';
import ContainerOutside from '../../examples/Navbar/ContainerOutside';
import ContainerInside from '../../examples/Navbar/ContainerInside';
import withLayout from '../../withLayout';

export default withLayout(function NaπvbarSection({ data }) {
  return (
    <>
      <Heading h="1" id="navbars">
        Navbars
      </Heading>
      <p className="lead">
        A powerful, responsive navigation header, the navbar. Includes support
        for branding, navigation, and more
      </p>

      <Heading h="2" id="navbars-overview">
        Overview
      </Heading>
      <p>
        Here’s what you need to know before getting started with the navbar:
      </p>
      <ul>
        <li>
          Navbars and their contents are fluid by default. Use optional{' '}
          <a href="#containers">containers </a> to limit their horizontal width.
        </li>
        <li>
          Modals are <em>unmounted</em> when closed.
        </li>
        <li>
          Bootstrap only supports <strong>one</strong> modal window at a time.
          Nested modals aren’t supported, but if you really need them the
          underlying <code>react-overlays</code> can support them if you're
          willing.
        </li>
        <li>
          Modal's "trap" focus in them, ensuring the keyboard navigation cycles
          through the modal, and not the rest of the page.
        </li>
        <li>
          Unlike vanilla Bootstrap, <code>autoFocus</code> works in Modals
          because React handles the implementation.
        </li>
      </ul>

      <p>
        A responsive navigation header, including support for branding,
        navigation, and more. Here’s an example of all the sub-components
        included in a responsive light-themed navbar that automatically
        collapses at the lg (large) breakpoint.
      </p>

      <ReactPlayground codeText={NavbarBasic} />
      <Heading h="2" id="navbars-brand">
        Brand
      </Heading>
      <p>
        A simple flexible branding component. Images are supported but will
        likely require custom styling to work well.
      </p>
      <ReactPlayground codeText={NavbarBrand} />

      <Heading h="2" id="navbars-form">
        Forms
      </Heading>
      <p>
        Use <code>{'<Form inline>'}</code> and your variaous form controls
        within the Navbar. Align the contents as needed with utility classes.
      </p>
      <ReactPlayground codeText={NavbarForm} />

      <Heading h="2" id="navbars-text-link">
        Text and Non-nav links
      </Heading>
      <p>
        Loose text and links can be wrapped <code>Navbar.Text</code> in order to
        correctly align it vertically.
      </p>
      <ReactPlayground codeText={NavbarTextLink} />

      <Heading h="2" id="navbars-colors">
        Color schemes
      </Heading>
      <p>
        Theming the navbar has never been easier thanks to the combination of
        theming classes and background-color utilities. Choose from
        <code>variant="light"</code> for use with light background colors, or{' '}
        <code>variant="dark"</code> for dark background colors. Then, customize
        with the <code>bg</code> prop or any custom css!
      </p>

      <ReactPlayground codeText={NavbarColorSchemes} />

      <Heading h="2" id="navbars-containers">
        Containers
      </Heading>
      <p>
        While not required, you can wrap the Navbar in a{' '}
        <code>{'<Container>'}</code> component to center it on a page, or add
        one within to only center the contents of a{' '}
        <a href="#navbar-placement">fixed or static top navbar</a>.
      </p>
      <ReactPlayground codeText={ContainerOutside} />

      <p>
        When the container is within your navbar, its horizontal padding is
        removed at breakpoints lower than your specified{' '}
        <code>{`expand={'sm' | 'md' | 'lg' | 'xl'}`}</code> prop. This ensures
        we’re not doubling up on padding unnecessarily on lower viewports when
        your navbar is collapsed.
      </p>
      <ReactPlayground codeText={ContainerInside} />

      <Heading h="2" id="navbars-placement">
        Placement
      </Heading>
      <p>
        You can use Bootstrap's{' '}
        <a href="https://getbootstrap.com/docs/4.1/utilities/position/">
          position utilities
        </a>{' '}
        to place navbars in non-static positions. Choose from fixed to the top,
        fixed to the bottom, or stickied to the top (scrolls with the page until
        it reaches the top, then stays there). Fixed navbars use{' '}
        <code>position: fixed</code>, meaning they’re pulled from the normal
        flow of the DOM and may require custom CSS (e.g., padding-top on the{' '}
        <code>{'<body>'}</code>) to prevent overlap with other elements. Also
        note that{' '}
        <strong>
          <code>.sticky-top</code> uses <code>position: sticky</code>, which{' '}
          <a href="https://caniuse.com/#feat=css-sticky">
            isn’t fully supported in every browser
          </a>
        </strong>.
      </p>

      <p>
        Since these positioning needs are so common for Navbars, we've added
        convenience props for them
      </p>
      <h3 className="h4">Fixed top</h3>
      <CodeBlock codeText={` <Navbar fixed="top" />`} />

      <h3 className="h4">Fixed bottom</h3>
      <CodeBlock codeText={` <Navbar fixed="bottom" />`} />

      <h3 className="h4">Sticky top</h3>
      <CodeBlock codeText={` <Navbar sticky="top" />`} />

      <h3 className="h4">Sticky bottom</h3>
      <CodeBlock codeText={` <Navbar sticky="bottom" />`} />

      <Heading h="2" id="navbars-mobile-friendly">
        Responsive behaviors
      </Heading>
      <p>
        Use the <code>expand</code> prop as well as the{' '}
        <code>Navbar.Toggle</code> and <code>Navbar.Collapse</code> components
        to control when content collapses behind a button.
      </p>
      <p>
        Set the <code>defaultExpanded</code> prop to make the Navbar start
        expanded. Set <code>collapseOnSelect</code> to make the Navbar collapse
        automatically when the user selects an item. You can also finely control
        the collapsing behavior by using the <code>expanded</code> and{' '}
        <code>onToggle</code> props.
      </p>

      <Callout theme="warning">
        Watch out! You <strong>need</strong> to provide a breakpoint value to{' '}
        <code>expand</code> in order for the Navbar to collapse at all.
      </Callout>
      <ReactPlayground codeText={NavbarCollapsible} />

      <Heading h="2" id="navbar-api">
        API
      </Heading>

      <ComponentApi metadata={data.Navbar} />
      <ComponentApi metadata={data.NavbarBrand} exportedBy={data.Navbar} />
      <ComponentApi metadata={data.NavbarToggle} exportedBy={data.Navbar} />
      <ComponentApi metadata={data.NavbarCollapse} exportedBy={data.Navbar} />
    </>
  );
});

export const query = graphql`
  query NavbarQuery {
    Navbar: componentMetadata(displayName: { eq: "Navbar" }) {
      ...ComponentApi_metadata
    }
    NavbarBrand: componentMetadata(displayName: { eq: "NavbarBrand" }) {
      ...ComponentApi_metadata
    }
    NavbarToggle: componentMetadata(displayName: { eq: "NavbarToggle" }) {
      ...ComponentApi_metadata
    }
    NavbarCollapse: componentMetadata(displayName: { eq: "NavbarCollapse" }) {
      ...ComponentApi_metadata
    }
  }
`;
