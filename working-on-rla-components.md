# Working on RLA Components

## Getting started

You’ll need access to the https://github.com/rladigital/rla-components

1.  Clone the https://github.com/rladigital/rla-components repo.
2.  Open the terminal at the rla-components folder and run ‘yarn install’ to install all the project dependancies.
3.  The run ‘yarn storybook’ to start the storybook. This will serve a storybook to http://localhost:6006/ where you can browse and interact with the components.

## Working on components

The components are stored in the src/components directory. Examples of how to use them, variants etc. are added to the storybook in the .storybook directory.

To give the best idea of how to with on the components below is the rough process of how to add a new component, editing an existing one should be easier :)

1.  Create your new component in the src/components directory, e.g. exampleComponent.js
2.  Add the code to make your component work e.g. write a React component (or components) that render the required output (see the Tips for some thoughts).
3.  Add your component to the src/index.js file, for example:

```javascript
export { default as ExampleComponent } from "./components/exampleComponent";
```

4.  That's your component made, however you probably need to see it in action right? ;) Well to do that, and for others to see how to use it, we need to add it to the storybook.

### Tips for a 'good' component

1.  Always try to add a displayName, that matches the exported component name, as it will make the Source view a lot more usefull, for example:

```javascript
ExampleComponent.displayName = "ExampleComponent";
```

2.  Use [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) to properly control the props being passed into the component, see below for example (adding the docblocks helps document the source view, so is a really good idea):

```javascript
ExampleComponent.propTypes = {
    /** The width of the component */
    width: PropTypes.number
};

Row.defaultProps = {
    width: 1400
};
```

3.  Try to use [styled-components](https://www.styled-components.com/docs/basics#getting-started) where possible, and think carefully if you should pass values in as props, or theme based vaiables, to allow for customisations.

## Adding components to the Storybook

The [Storybook](https://storybook.js.org/) allows you develop your component in isolation from the rest of an application. In essence allowing you to fully think through how best to make the component work without getting caught up in a particular implementation (there's an idea later for working on them in an actual project if needed). There's Storybook documentation at [https://storybook.js.org/basics/quick-start-guide/], and below there's a couple of ideas of how we're using them:

1.  To get started you have a couple of options:

*   If your component is entirely new (e.g. a new item down the main nav) setup a new file in the .storybook/components directory. Maybe just resave one that looks close to what you're after if you feel that'd help (the ButtonStory.js might be a good one to check out as it is fairly simple, but includes knobs and info).
*   If your component is part of an existing story just add it to the one that's already there

2.  Import your component into the story and any required addons (we're making use of Info (allows you to view how to use the component) and Knobs (allows you to change the props passed in)):

```javascript
import { ExmapleComponent } from "../../src/exmapleComponent";

import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean } from "@storybook/addon-knobs";
```

3.  You now need to add the code to generate your story, this could be very varried, so probably just look at one of the existing ones, or the docs, or try something like below:

```javascript
const stories = storiesOf("Example", module);

stories.addDecorator(withKnobs);

stories.add(
    "Default",
    withInfo("Example usage")(() => {
        let someProp = boolean("Some prop name", false);
        let someOtherProp = boolean("A different prop name", false);
        return (
            <ExampleComponent someProp={someProp} someOtherProp={someOtherProp}>
                Some content here...
            </ExampleComponent>
        );
    })
);
```

## Publishing the components

To make the components available to projects they need to be published to NPM. To do this you'll need to have access to publish to the [https://www.npmjs.com/package/rla-components] package. Then follow the NPM publishing instructions, in essence:

1.  Run the 'npm version patch' (or one of the npm version [version commands](https://docs.npmjs.com/cli/version))
2.  Run the 'npm publish' command, to publish it.
3.  Go to the project that requires the updated package and either 'yarn add rla-components' if it's not in use already, or 'yarn update' if it's already there.
4.  If the site was already started you'll need to stop it and run 'yarn start' again for the changes to be applied. If you get any issues sometimes it's worth just removing the node_modules directory and running 'yarn install' again.

### Working with the components in a local project without having to publish to NPM

It's a bit a of long winded process getting the package published to NPM, and sometimes you need to work on some 'app specific' issue. If so it's great to know that you can link the local copy of rla-components to your local copy of the project. Here's how:

1.  Open the terminal in the rla-components directory and run 'yarn link'. This will setup the link and generate some output which includes a command you can copy 'yarn link "rla-components"', I'd copy it.
2.  Now browse to the project you want to work on the component in, and run the command you copied (e.g. yarn link "rla-components").
3.  You can now make changes to the component, then run 'yarn build' and they will be reflected in the other project. It's still a little faff but nothing like the 'publishing' route!
4.  Once you're finished with the link just run 'yarn unlink' in the rla-components directory, and you'll be using the NPM version again.
