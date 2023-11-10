import { Button, Card, Label, TextInput } from "flowbite-react"

export default function ProfilePage(){
    return (
    <div className="text-white grid grid-cols-1">
        <Card className="w-1/2 justify-self-center">
            <form className="grid grid-cols-1 gap-3">
                <div className="grid grid-cols-2">
                <h1 className="text-2xl">My Profile</h1>
                <p className="justify-self-end text-green-400">Edit your profile below</p>
                </div>
               
                <Label>Full Name</Label>
                <TextInput>
                </TextInput>
                <Label>Email Address</Label>
                <TextInput>
                </TextInput>
                <Label>Occupation</Label>
                <TextInput>
                </TextInput>
                <Label>Mobile Number</Label>
                <TextInput>
                </TextInput>
                <Label>Address Line 1</Label>
                <TextInput>
                </TextInput>
                <Label>Address Line 2</Label>
                <TextInput>
                </TextInput>
                <Label>City</Label>
                <TextInput>
                </TextInput>
                <Label>State</Label>
                <TextInput>
                </TextInput>
                <Label>Postal Code</Label>
                <TextInput>
                </TextInput>
                <Label>Member Country</Label>
                <TextInput>
                </TextInput>
                <Label>New Password</Label>
                <TextInput>
                </TextInput>
                <Label>Confirm New Password</Label>
                <TextInput>
                </TextInput>
                <Label>Current Password</Label>
                <TextInput>
                </TextInput>
                <Label color="success">Type your current password to save changes</Label>
                <Button className="justify-self-center">Update Profile</Button>

            </form>
        </Card>
    </div>
    )
}