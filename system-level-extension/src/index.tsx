((window: any) => {
  const component = () => React.createElement('div', null, 'Hello World!');
  window?.extensionsAPI?.registerSystemLevelExtension(component, 'Hello World', '/hello-world', 'fa-puzzle-piece');
})(window);
