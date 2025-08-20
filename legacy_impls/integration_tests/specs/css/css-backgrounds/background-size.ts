describe('Background-size', () => {
  it('should works with contain', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'contain'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.1);
  });

  it('should works with cover', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'cover'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.1);
  });

  it('should works with auto', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'auto'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.1);
  });

  it('should works with auto of two values', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'auto auto'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.1);
  });

  it('should works with auto of first value', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'auto 130px'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.1);
  });

  it('should works with auto of second value', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: '80px auto'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.1);
  });

  it('should works with one value of length', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: '120px'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.1);
  });

  it('should works with two values of length', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: '120px 60px'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.1);
  });

  it('should works with one value of percentage', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: '20%'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.1);
  });

  it('should works with two values of percentage', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: '70% 30%'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.1);
  });

  it('should works with two values of mixed percentage and length', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: '70% 110px'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.1);
  });

  it('should works with length value and background-repeat of repeat', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/test-bl.png)',
           backgroundRepeat: 'repeat',
           backgroundSize: '120px'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.5);
  });

  it('should works with percentage value and background-repeat of repeat', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/test-bl.png)',
           backgroundRepeat: 'repeat',
           backgroundSize: '40%'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.3);
  });

  it('should works with the height of background size bigger than the height of image container', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: '180px',
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.3);
  });

  it('should works with the width of background size bigger than the width of image container', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: '280px 120px',
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.3);
  });

  it('should works with background size bigger than image container', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/bg.jpg)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: '250px',
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.3);
  });

  it('should not work with negative value', async () => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: '170px -50px'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.3);
  });

  it('should works with background-size value change', async (done) => {
    let div1;
    let div = createElement(
     'div',
     {
       style: {},
     },
     [
       (div1 = createElement('div', {
         style: {
           height: '150px',
           width: '200px',
           backgroundColor: '#999',
           backgroundImage: 'url(assets/100x100-green.png)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: '120px 30px',
           backgroundPosition: '10px 10px'
         },
       })),
     ]
    );
    append(BODY, div);
    await snapshot(0.3);

    requestAnimationFrame(async () => {
      div1.style.backgroundSize = '80px';
      div1.style.backgroundPosition = '40px 40px';
      await snapshot();
      done();
    });
  });

  it("computed", async () => {
    let target;
    target = createElement('div', {
      id: 'target',
      style: {
        'font-size': '40px',
        'box-sizing': 'border-box',
      },
    });
    BODY.appendChild(target);

    test_computed_value('background-size', '1px', '1px');
    test_computed_value('background-size', '1px auto', '1px auto');
    test_computed_value('background-size', '2% 3%');
    test_computed_value('background-size', 'auto');
    test_computed_value('background-size', 'auto auto', 'auto');
    test_computed_value('background-size', 'auto 4%');
    test_computed_value('background-size', 'contain');
    test_computed_value('background-size', 'cover');
    test_computed_value(
      'background-size',
      'calc(10px + 0.5em) calc(10px - 0.5em)',
      '30px -10px'
    );
    test_computed_value(
      'background-size',
      'calc(10px - 0.5em) calc(10px + 0.5em)',
      '-10px 30px'
    );

    // See background-computed.html for a test with multiple background images.
    test_computed_value('background-size', 'auto 1px', 'auto 1px');
  })
});
