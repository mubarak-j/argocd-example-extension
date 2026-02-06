((window: any) => {
  const component = (props: { application: any; tree: any }) =>
    React.createElement('div', null, 'Hello World!');
  window?.extensionsAPI?.registerAppViewExtension(component, 'Hello World', 'fa-puzzle-piece');
})(window);
