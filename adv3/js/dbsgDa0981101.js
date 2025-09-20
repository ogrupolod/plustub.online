
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
              const clickeventList = [{"compKey":"151602b","misc":{"type":"image"}},{"compKey":"7218b7b","misc":{"type":"button"}},{"compKey":"ff877d6","misc":{"type":"text"}},{"compKey":"22994d0","misc":{"type":"image"}},{"compKey":"87c5156","misc":{"type":"button"}},{"compKey":"ed8679e","misc":{"type":"text"}},{"compKey":"e919484","misc":{"type":"text"}},{"compKey":"d1dde0a","misc":{"type":"text"}},{"compKey":"6bd1a76","misc":{"type":"text"}},{"compKey":"9c5871e","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();
      (function() {
        try {
          setTimeout(() => {
            let elementsWithDelayClass = document.querySelectorAll(".atomicat-delay");
            if(elementsWithDelayClass){
              elementsWithDelayClass.forEach(element => {
                element.classList.remove("atomicat-delay");
              });
            }
            
    var scrollElement = document.getElementById("potes");
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
          }, 1842000);
        } catch (error) {
          console.log(error);
        }
      })();
    