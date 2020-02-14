- [ ] Why would you use class component over function components (removing hooks from the question)?

    Since the last React update, function components can actually do everything that class components can do, so the only real reason to still choose class components is if the rest of the dev team prefers class components / you are working with legacy code.

- [ ] Name three lifecycle methods and their purposes.

    1. componentDidMount(): this method fires after the component where it's called has been mounted in the DOM. If there's anything you need to do after the UI loads, such as make an API call, you can do it here.
    2. componentDidUpdate(): doesn't fire after the first render but gets called after each update occurs. If there's anything you need to do to the DOM when the component has been updated, this is where you'd do that.
    3. componentWillUnmount(): fires right before a component is destroyed. This is where you would do cleanup, such as destroy counters or event listeners.

- [ ] What is the purpose of a custom hook?

    Custom hooks allow us to share stateful logic between components

- [ ] Why is it important to test our apps?

    Testing surfaces bugs faster, allows us to trust the code, makes us think about the edge cases, and acts as a safety net when making changes to code.