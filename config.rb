require "uglifier"

# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

# Use '#id' and '.classname' as div shortcuts in slim
# http://slim-lang.com/
Slim::Engine.set_options shortcut: {
  '#' => {tag: 'div', attr: 'id'},
  '.' => {tag: 'div', attr: 'class'}
}

# When using RedCarpet, Middleman will handle links and 
# image tags with its own helpers, meaning things like 
# :relative_links and :asset_hash will do what you expect. 
# However, the default Markdown engine is 
# Kramdown because it's easier to install.
set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, smartypants: true

activate :directory_indexes # pretty urls
activate :syntax #syntax highlighting
activate :minify_html #minifies whitespace around HTML via Htmlcompressor
# Add browser-specific prefixes to stylesheet for compatibility with newest CSS features
# NOTE: used to put this in build since it slowed down dev,
# but it seems to be fast enough with webpacker for now
activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end
activate :dato, live_reload: true
# webpack
activate :external_pipeline,
  name: :webpack,
  command: build? ? './node_modules/webpack/bin/webpack.js --bail' : './node_modules/webpack/bin/webpack.js --watch -d',
  source: ".tmp/dist",
  latency: 1

# Layouts
# https://middlemanapp.com/basics/layouts/
# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page "/partials/*", layout: false
# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# activate :blog do |blog|
#   blog.permalink = "news/{year}/{title}.html"
#   blog.sources = "posts/{title}.html"
#   blog.layout = "news-detail"
# end

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/
# proxy product.yml files to product.html 
# data.products.each do |product|
#   # product is an array: [filename, {data}]
#   proxy "/product/#{product[1][:title].parameterize}/index.html", "product.html", 
#   locals: {product: product[1]}, 
#   layout: 'product-detail',
#   ignore: true
# end

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/
helpers do
  #helper to set background images with asset hashes in a style attribute
  def background_image(image)
    "background-image: url('" << image_path(image) << "')"
  end

  def icon(name)
    content_tag(:i, '', class: "fas fa-#{name}")
  end

  def markdown(content)
    Tilt::RedcarpetTemplate.new { content }.render
  end
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# enable livereload on development
configure :development do
  activate :livereload
end

configure :build do
  # Minify css on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript, compressor: ::Uglifier.new(mangle: true, compress: {drop_console: true}, output: {comments: :none})

  # # Image optimization on build
  # activate :imageoptim 

  # Use Gzip
  activate :gzip

  #Use asset hashes to use for caching
  #activate :asset_hash
end
