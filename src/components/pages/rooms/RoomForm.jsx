import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RoomForm = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = (room) => {
    if (editar) {
      console.log("Aca se edita");
    } else {
      console.log(room);
    }
  };

  return (
    <Container className="my-4 mainContainer">
      <h1 className="mb-4">{titulo} Habitación</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 text-light" controlId="numero">
          <Form.Label>Número de Habitación:*</Form.Label>
          <Form.Control
            type="number"
            placeholder="1"
            {...register("numero", {
              required: "El número de habitación es obligatorio",
              min: {
                value: 1,
                message: "El número minimo es 1",
              },
              max: {
                value: 30,
                message: "El número máximo es 30",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.numero?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="tipoHabitacion">
          <Form.Label>Tipo Habitación:*</Form.Label>
          <Form.Select
            {...register("tipoHabitacion", {
              required: "El tipo de habitación es obligatorio",
            })}
          >
            <option value="">Seleccione un Tipo</option>
            <option value="Individual">Individual</option>
            <option value="Doble">Doble</option>
            <option value="Triple">Triple</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.tipoHabitacion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="categoria">
          <Form.Label>Categoria:</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una Categoria</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Ejecutiva">Ejecutiva</option>
            <option value="Suite">Suite</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="descripcion">
          <Form.Label className="me-3">Descripción:*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ej. Habitación deluxe con 2 camas somier, con vista al mar."
            {...register("descripcion", {
              required: "La descripción es obligatoria",
              minLength: {
                value: 15,
                message: "La descripción debe tener como mínimo 15 caracteres",
              },
              maxLength: {
                value: 350,
                message: "La descripción debe tener como máximo 350 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="precio">
          <Form.Label>Precio:*</Form.Label>
          <Form.Control
            type="number"
            placeholder="5000"
            {...register("precio", {
              required: "El precio es obligatorio",
              min: {
                value: 4000,
                message: "El precio minimo es 4000",
              },
              max: {
                value: 500000,
                message: "El precio máximo es 500000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="imagen">
          <Form.Label>Imagen:*</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://web.com/ejemplo.png"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern: {
                value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                message:
                  "Debe ingresar una URL de imagen valida (png, jpg, jpeg, gif, png, svg)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="disponibilidad">
          <Form.Label className="me-3">Disponible:*</Form.Label>
          <Form.Select
            {...register("disponibilidad", {
              required: "La disponibilidad es obligatoria",
            })}
          >
            <option value="">Seleccione una opción</option>
            <option value={true}>Si</option>
            <option value={false}>No</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.disponibilidad?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Button variant="success me-2">Guardar</Button>
          <Link to="/" className="btn btn-primary">
            Volver
          </Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default RoomForm;