((window: any) => {
  const component = (props: { application: any; resource: any; tree: any }) =>
    React.createElement('div', null, `Hello World! Application: ${props.resource.metadata.name}`);
  window?.extensionsAPI?.registerResourceExtension(component, 'argoproj.io', 'Application', 'Hello World');
})(window);
