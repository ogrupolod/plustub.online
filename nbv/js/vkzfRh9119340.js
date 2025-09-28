
      function atomiShowItems({items}) {
      try {
        items.forEach((item) => {
          const hiddenItem = [...document.querySelectorAll(`#${item}`), ...document.querySelectorAll(`.${item}`)];
          console.log("hiddenItem", hiddenItem)
          if (hiddenItem?.length > 0) {
            hiddenItem.forEach(item => item.classList.remove("atomicat-delay"));
          }
        })
      } catch (error) {
        console.log(error);
      }
      }
    (function() {
          try {
              const clickeventList = [{"compKey":"45cfad7","misc":{"type":"image"}},{"compKey":"21ee560","misc":{"type":"button"}},{"compKey":"604f8a0","misc":{"type":"button"}},{"compKey":"4390cb2","misc":{"type":"text"}},{"compKey":"7d640a8","misc":{"type":"text"}},{"compKey":"483959e","misc":{"type":"text"}},{"compKey":"5687aef","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();