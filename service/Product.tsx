"use client"
import ProductCard from '@/components/ProductCard'
import { Context } from '@/context/Context'
import { useAxios } from '@/hook/useAxios'
import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import { Pagination } from 'antd'

export interface ProductType {
    product_id?: string,
    basket?: boolean,
    cost: number,
    count?: number,
    discount?: number
    image_url: string[],
    liked?: boolean,
    product_description?: string,
    product_name: string,
    short_description?: string,
    size?: string[],
    tags?: string[]
}

const Product = () => {
    const { token }: any = useContext(Context)
    const { category, tags, minPrice, maxPrice } = useContext(Context)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(9)
    const [sortBy, setSortBy] = useState<string>('default') 

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products', category, tags, minPrice, maxPrice, currentPage, pageSize],
        queryFn: () => useAxios().get("/products", {
            headers: token ? { "Authorization": `Bearer ${token.access_token}` } : {},
            params: {
                page: currentPage,
                limit: pageSize,
                category,
                size: null,
                tags,
                max_price: maxPrice,
                min_price: minPrice
            }
        }).then(res => res.data.products || []),
        enabled: true
    })

    const handlePageChange = (page: number, size?: number) => {
        setCurrentPage(page)
        if (size) setPageSize(size)
    }

    const sortProducts = (products: ProductType[]) => {
        switch (sortBy) {
            case 'price_asc':
                return [...products].sort((a, b) => a.cost - b.cost)
            case 'price_desc':
                return [...products].sort((a, b) => b.cost - a.cost)
            case 'name_asc':
                return [...products].sort((a, b) => a.product_name.localeCompare(b.product_name))
            case 'name_desc':
                return [...products].sort((a, b) => b.product_name.localeCompare(a.product_name))
            default:
                return products
        }
    }
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value)
    }

    return (
        <div>
        <div className='text-end mb-[21px]'>
           <b className='text-[15px] text-[#3D3D3D] leading-[16px] font-normal cursor-pointer'>Sort by : </b>
            <select onChange={handleSortChange} value={sortBy} className='text-[15px] outline-none text-[#3D3D3D] leading-[16px] font-normal cursor-pointer'>
                <option value="default">Default Sorting</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="name_asc">Name: A to Z</option>
                <option value="name_desc">Name: Z to A</option>
            </select>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "55px" }}>
            {isLoading ? "Loading..." : sortProducts(products).map((item: ProductType) => (
                <ProductCard key={item.product_id} item={item} />
            ))}
        </div>
        <Pagination
            align='end'
            current={currentPage}
            pageSize={pageSize}
            total={35}
            onChange={handlePageChange}
            style={{ marginTop: "70px", textAlign: "center" }}
        />
    </div>
    )
}

export default Product
