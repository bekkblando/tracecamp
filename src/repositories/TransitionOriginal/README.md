This is a little wrapper component I've put together around `react-transition-group` that makes it easy to integrate the transition styles we use in Tailwind UI.

Here's what it looks like to use with one of our simple dropdown components for example:

```jsx
import { React.useState } from "react";
import Transition from "./Transition.js";

function Dropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="relative ...">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="...">
        Options
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
          <div className="rounded-md bg-white shadow-xs">{/* Snipped */}</div>
        </div>
      </Transition>
    </div>
  );
}
```

The `show` prop controls whether the elements are shown or hidden, and the rest of the props are classes that should be added during different phases of the transitions, and map to the comments you see in the component code.

You'll sometimes see examples in Tailwind UI where two things are transitioning at the same time based on the same piece of state. For example, in our sidebar layouts, when you open the sidebar the sidebar itself has to slide in from the left, while a background overlay fades in behind the sidebar. Both of these elements are nested within a shared parent `div` that needs to be toggled based on whether the sidebar is shown or not.

In these cases, you can use a `Transition` around the shared parent, passing through the `show` prop but no class props, and then wrap the transitioning child elements with their own `Transition` **omitting** the `show` prop, and only passing through the class props:

```js
function Sidebar({ isOpen }) {
  return (
    <Transition show={isOpen}>
      {/* Shared parent */}
      <div>
        {/* Background overlay */}
        <Transition
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* ... */}
        </Transition>

        {/* Sliding sidebar */}
        <Transition
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          {/* ... */}
        </Transition>
      </div>
    </Transition>
  );
}
```

The `Transition` components will automatically work together to make sure the transitions behave the way you'd expect.

Eventually we'll probably publish this as a library you can pull in, but in the mean time just grab a copy of the code and save it in your project with your other components.
