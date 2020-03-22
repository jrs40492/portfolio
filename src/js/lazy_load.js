let options = {
  selector: '[data-background-image-url]',
  loadedClassName: 'loaded',
  path: '/images/',
  webpSupported: false
};

Modernizr.on('webp', function (result) {
  if (result) {
    options.webpSupported = true;
  }
  backgroundLazyLoader();
});

function backgroundNode({ node, loadedClassName }) {
  const imageName = node.getAttribute('data-background-image-url');

  // Check if webp is supported
  const type = options.webpSupported ? 'webp' : 'jpg';

  const src = `${options.path}${imageName}.${type}`;

  const show = onComplete => {
    requestAnimationFrame(() => {
      node.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${src})`;
      node.classList.add(loadedClassName);
      onComplete();
    });
  };

  return {
    node,

    // onComplete is called after the image is done loading.
    load: onComplete => {
      const img = new Image();
      img.onload = show(onComplete);
      img.src = src;
    }
  };
}

function backgroundLazyLoader({ selector, loadedClassName } = options) {
  // Get all nodes that require lazy loading and put them into an array
  let nodes = [].slice
    .apply(document.querySelectorAll(selector))
    .map(node => new backgroundNode({ node, loadedClassName }));

  const callback = (entries, observer) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) {
        return;
      }

      let obj = nodes.find(x => x.node.isSameNode(target));

      if (obj) {
        obj.load(() => {
          // Unobserve the node:
          observer.unobserve(target);
          // Remove this node from our list:
          nodes = nodes.filter(n => !n.node.isSameNode(target));

          // If there are no remaining unloaded nodes,
          // disconnect the observer since we don't need it anymore.
          if (!nodes.length) {
            observer.disconnect();
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(callback);
  nodes.forEach(node => observer.observe(node.node));
}
