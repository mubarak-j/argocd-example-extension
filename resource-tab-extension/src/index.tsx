((window: any) => {
  const component = (props: { application: any; resource: any; tree: any }) =>
    React.createElement('div', null, `Hello World! Pod: ${props.resource.metadata.name}`);
  window?.extensionsAPI?.registerResourceExtension(component, '', 'Pod', 'Hello World');
})(window);
