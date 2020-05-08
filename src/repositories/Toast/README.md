# Tailwind UI notifications React hooks implementation

- This is a fully working implementation of the Tailwind UI notifications (https://tailwindui.com/components/application-ui/overlays/notifications) using React hooks
- Only difference with Tailwind UI default implementation is that it hides notifications automatically after 5s, unless you hover the notification with your mouse
- This uses a modified version of the Transition.js from Tailwind UI authors to include `appear` from https://reactcommunity.org/react-transition-group/transition#Transition-prop-appear.

## Requirements

```bash
npm install react-use react-transition-group
```

As for loading svg files in React, I recommend https://react-svgr.com/.

## Usage

Somewhere high enough in your React tree (in a Layout.jsx or App.jsx file):

**Layout.jsx**
```jsx
import { ToastProvider } from "./toast";
import ToastContainer from "./ToastContainer"

export default function Layout() {
  return (
    <ToastProvider>
      <ToastContainer>
        {/* Your components, and Tailwind UI shell here */}
      </ToastContainer>
    </ToastProvider>
  )
}
```

Somewhere in your application:
**Component.jsx**
```jsx
import { useToast } from "./toast";

export default function Component() {
  const { addToast } = useToast();
  
  return (
    <div onClick={ () => { addToast("Success!"); }}/>
  )
}
```

Note that `<ToastProvider>` and `<ToastContainer>` are not necessarily required to be at the top most root level. They could also be _inside_ your main Tailwind UI shell. It depends on your needs.

Thanks to:
- https://medium.com/@aibolkussain/creating-toast-api-with-react-hooks-94e454379632
- https://medium.com/@jossmac/a-deep-ish-dive-into-react-context-64f819d63eab