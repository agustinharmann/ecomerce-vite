import { Box, Card, CardMedia, Skeleton, Stack, Typography } from "@mui/material";
import { CounterContainer } from '../../../components/common/counter/CounterContainer';

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {

  return (
    <>
      <Card sx={{
        boxShadow: 'none'
      }}>
        <Box>
          <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '16px' }}>
            <Typography variant="h4" gutterBottom>
              {product.title ? product.title : <p>Cargando...</p>}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {product.category ? product.category : <p>Cargando...</p>}
            </Typography>
            {product.image ? <CardMedia style={{ width: 300, height: 300, marginBottom: '16px' }} component="img" alt={product?.title} image={product?.image} /> : <p>Cargando...</p>}
            {/*  */}
            <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
              {product.price ? product.price : <p>Cargando...</p>}
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '16px', width: '100%', maxWidth: '600px' }}>
              {product.description ? product.description : <p>Cargando...</p>}
            </Typography>
            {cantidadEnCarrito && <Typography variant="h5" color="textSecondary">
              Ya tenés {cantidadEnCarrito} unidades en tu carrito.
            </Typography>}
            <Typography variant="body2" color="textSecondary">
              {product.stock ? <p><strong>Stock</strong> : {product.stock} unidades </p> : <p>Cargando...</p>}
            </Typography>
          </Box>
          <CounterContainer
            cantidadEnCarrito={cantidadEnCarrito}
            stock={product?.stock}
            agregarAlCarrito={agregarAlCarrito}
          />
        </Box>
      </Card>

    </>
  );
};

export { ItemDetail };
