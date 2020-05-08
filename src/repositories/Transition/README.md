This is the exact same implementation as https://tailwindui.com/components/application-ui/application-shells/sidebar. Nothing was changed BUT just adding the right events and state handling.

Be careful that you also need to update your `Transition.js` component if you're using the one provided by Tailwind UI authors, I updated it here.

They key to making it fully working with React is that you need more than one state variable. You need one that says "Close the sidebar (animation starts)" and another one that says "Hide the sidebar (when animation finishes)". Otherwise you end up in weird situations where you can't click on some buttons because they are hidden behind some high z-index divs.

# Demo

![Demo](https://user-images.githubusercontent.com/123822/79699144-d728db00-828d-11ea-8aba-8b6febdcdce4.gif)

# Dependencies

There are a few dependencies added to handle everything well.

```bash
npm install react-transition-group
```

