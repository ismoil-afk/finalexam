import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

type FieldType = {
  email?: string;
  password?: string;
};

const API = import.meta.env.VITE_API;

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const { email, password } = values;
    await axios
      .post(`${API}/api/users/login`, { password, email })
      .then((res) => {
        navigate("/");
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        window.location.reload();
      })
      .catch((err) => {
        if (err.status == 409) {
          toast.error("User Not found, please Try again");
        } else {
          toast.error("Something went wrong");
        }
      });
  };
  return (
    <Form
      name="layout-multiple-horizontal"
      layout="horizontal"
      requiredMark={false}
      onFinish={(values) => onFinish(values)}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      <h2 className="text-[36px] font-[700] leading-[100%] text-[#151515] text-center mb-[36px]">
        Tizimga kirish
      </h2>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true }]}
        layout="vertical"
        className="h-[60px] w-[270px] sm:w-[374px] username_label"
      >
        <Input placeholder="Elektron pochtangizni kiriting" type="email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true }]}
        layout="vertical"
        className="h-[60px] w-[270px] sm:w-[374px] password_label"
      >
        <Input placeholder="Parolingizni kiriting" />
      </Form.Item>
      <Form.Item label={null}>
        <Button htmlType="submit" type="primary">
          Tizimga kirish
        </Button>
      </Form.Item>
      <h2 className="text-[14px] text-[#24272C] text-center leading-[120%] font-[300]">
        Hisobingiz yo'q?{" "}
        <Link to={"/register"} className="text-[#1B28BC]">
          Hisob yaratish
        </Link>
      </h2>
    </Form>
  );
};

export default LoginForm;
