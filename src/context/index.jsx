import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const [productDetail, setProductDetail] = useState({})
    const [cart, setCart] = useState([])
    const openDetail = () => setIsProductDetailOpen(true)
    const closeDetail = () => setIsProductDetailOpen(false)

    const [sideMenu, setSideMenu] = useState(false)
    const openSideMenu = () => setSideMenu(true)
    const closeSideMenu = () => setSideMenu(false)

    const [order, setOrder] = useState([])

    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products'
    fetch(url)
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])


  const [searchValue, setSearchValue] = useState(null)
  const [searchCategory, setSearchCategory] = useState(null)

  const handleFilterItems = (items, searchValue) => {
    return items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const handleFilterCategory = (items, searchCategory) => {
    return items.filter(item => item.category.toLowerCase().includes(searchCategory.toLowerCase()))
  }

  const filterBy = (type, items, title, category) => {
    if(type === 'title'){
      return handleFilterItems(items, title)
    }

    if(type === 'category') {
      return handleFilterCategory(items, category)
    }

    if(type === 'title_category') {
      return handleFilterCategory(items, category).filter(item => item?.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

    if(!type) {
      return items
    }
  }

  useEffect(() => {
    if(searchValue && searchCategory) setFilteredItems(filterBy('title_category', items, searchValue, searchCategory))
    if(searchValue && !searchCategory) setFilteredItems(filterBy('title', items, searchValue, searchCategory))
    if(searchCategory && !searchValue) setFilteredItems(filterBy('category', items, searchValue, searchCategory))
    if(!searchCategory && !searchValue) setFilteredItems(filterBy(null, items, searchValue, searchCategory))
  }, [items, searchValue, searchCategory])

    const data = {
        count,
        isProductDetailOpen,
        productDetail,
        cart,
        sideMenu,
        order,
        items,
        searchValue,
        filteredItems,
        searchCategory,
        setCount,
        openDetail,
        closeDetail,
        setProductDetail,
        setCart,
        openSideMenu,
        closeSideMenu,
        setOrder,
        setItems,
        setSearchValue,
        setSearchCategory
    }
  return (
    <ShoppingCartContext.Provider value={data}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

