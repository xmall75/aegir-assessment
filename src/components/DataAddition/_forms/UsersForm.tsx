import { Button, Form, Input, Select } from 'antd'
import { useRoles } from '../../../contexts/roles/hooks'
import { UserSchema, UserValidationRule } from '../../../schemas/user.schema'

const UsersForm = () => {
  const { rolesData, isLoading } = useRoles()
  const options = rolesData?.map((role) => ({
    value: role.id,
    label: role.name
  }))

  const onFinish = (data: UserSchema) => {
    console.log(data)
  }

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <div className="w-full md:w-[75%] lg:w-[70%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
          <Form.Item<UserSchema>
            label="First Name"
            name="first_name"
            rules={[UserValidationRule]}
            required
          >
            <Input />
          </Form.Item>
          <Form.Item<UserSchema> label="Last Name" name="last_name" rules={[UserValidationRule]}>
            <Input />
          </Form.Item>
          <Form.Item<UserSchema> label="Email" name="email" rules={[UserValidationRule]} required>
            <Input type="email" />
          </Form.Item>
          <Form.Item<UserSchema>
            label="Password"
            name="password"
            rules={[UserValidationRule]}
            required
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item<UserSchema> label="Role" name="role" rules={[UserValidationRule]}>
            <Select placeholder="Select a role" options={options} loading={isLoading} />
          </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add User
          </Button>
        </Form.Item>
      </div>
    </Form>
  )
}

export default UsersForm
