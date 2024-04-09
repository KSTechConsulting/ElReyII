
  // URL of the PDF file
  const pdfUrl = 'img/template-restaurant-menus.pdf';

  // Initialize the PDF.js viewer

  const pdfContainer = document.getElementById('pdfViewer');

  // Initialize PDF.js
  pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc) {
    for (let i = 0; i < pdfDoc.numPages; i++) {
      pdfDoc.getPage(i + 1).then(function(page) {
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        const pageContainer = document.createElement('div');
        pageContainer.className = 'pdf-page-container';
        pageContainer.appendChild(canvas);
        pdfContainer.appendChild(pageContainer);

        page.render(renderContext);
      });
    }
  });