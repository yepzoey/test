import "clsx";
/* empty css                     */
function _page($$payload) {
  $$payload.out += `<section id="results"><h1>Results</h1></section> <section id="metrics"><h2>Metrics</h2> <p>To quantify success, we will mainly utilize certain common machine learning metrics. We will analyze the accuracy of the models, both overall, but also between the different classes to identify any classes that the models struggle with. Considering this task involves automated diagnosis of serious pathological conditions, we will also analyze the sensitivity (true positive rate) and the specificity (true negative rate) of the models. As we wish to analyze the rate of uncertainty, we will also examine the fraction of instances either misclassified, or classified into the “Uncertain” class. With these metrics, we hope to identify both which classes the models struggle with the most, as well as any common sources of confusion found within the images themselves.</p></section> <section id="discussion"><h2>Discussion</h2> <p>We employ pre-trained convolutional neural networks (CNNs) such as DenseNet and ResNet for multi-label classification. 
        DenseNet, as inspired by CheXNet, uses dense connections to mitigate gradient vanishing problems in deep networks, while ResNet employs skip connections for similar purposes. 
        We utilize Grad-CAM visualizations to identify which regions of the chest X-ray images contribute most to model predictions, offering valuable insights into decision-making processes.</p></section> <aside><div class="contents-header">On this page</div> <ul><li><a href="#results">Results</a></li> <li><a href="#metrics">Metrics</a></li> <li><a href="#discussion">Discussion</a></li></ul></aside>`;
}
export {
  _page as default
};
