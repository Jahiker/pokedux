import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { StarOutlined } from '@ant-design/icons'

const PokemonCard = ({pokemon}) => {
  return (
    <Card
        title={pokemon.name}
        cover={<img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png' alt={pokemon.name} />}
        extra={<StarOutlined />}
    >
        <Meta description="fire, magic" />
    </Card>
  )
}

export default PokemonCard