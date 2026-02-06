((window: any) => {
  const component = (props: { application: any; tree: any; openFlyout: () => void }) =>
    React.createElement('div', { onClick: props.openFlyout }, 'Hello World!');
  const flyout = (props: { application: any; tree: any }) =>
    React.createElement('div', null, 'Hello World Flyout!');
  window?.extensionsAPI?.registerTopBarActionMenuExt(component, 'Hello World', 'hello-world', flyout);
})(window);
