module Ingredients
  class Generator < Jekyll::Generator
    def generate(site)
      ingredients_page = site.pages.detect {|page| page.name == 'ingredients.html' }

      if not ingredients_page.nil?
        ingredient_groups = {}
        for page in site.pages
          if page.data.include?('ingredients')
            for ingredient in page.data['ingredients']
              ingredient_name = ingredient[0]
              if not ingredient_groups.include?(ingredient_name)
                ingredient_groups[ingredient_name] = []
              end

              ingredient_groups[ingredient_name] << page
            end
          end
        end
        
        ingredients_page.data['ingredient_groups'] = Hash[ingredient_groups.sort]
      end
    end
  end
end
